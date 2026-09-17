import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LogOut,
  Search,
  CheckCircle2,
  Calendar,
  Building2,
  Phone,
  Mail,
  FileText,
  User,
  X,
  Save,
  Layers,
  Sparkles,
  Inbox,
  AlertCircle,
  RefreshCw,
} from 'lucide-react'
import logo from '@/assets/onine-pos-logo.jpg'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/cn'
import { useAuth } from '@/lib/auth-context'
import { isSupabaseConfigured, supabase, type LeadRecord } from '@/lib/supabase'

type StatusType = 'new' | 'contacted' | 'demo_scheduled' | 'converted' | 'closed'

const STATUS_CONFIG: Record<StatusType, { label: string; badgeClass: string }> = {
  new: { label: 'New', badgeClass: 'bg-blue-500/15 text-blue-400 border-blue-500/30' },
  contacted: { label: 'Contacted', badgeClass: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  demo_scheduled: { label: 'Demo Scheduled', badgeClass: 'bg-purple-500/15 text-purple-400 border-purple-500/30' },
  converted: { label: 'Converted', badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  closed: { label: 'Closed', badgeClass: 'bg-stone-500/15 text-stone-400 border-stone-500/30' },
}

const INTEREST_LABELS: Record<string, string> = {
  pos: 'Point of Sale (POS)',
  stock: 'Stock Management',
  fiscalization: 'Fiscalization',
  reports: 'Reports & Statistics',
  multiLocation: 'Multiple Locations',
  other: 'Other Capabilities',
}

export function AdminDashboardPage() {
  const navigate = useNavigate()
  const { user, signOut, isLocalDemoSession } = useAuth()
  const [leads, setLeads] = useState<LeadRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [selectedLead, setSelectedLead] = useState<LeadRecord | null>(null)
  const [modalError, setModalError] = useState<string | null>(null)
  const [noteText, setNoteText] = useState('')
  const [isSavingNote, setIsSavingNote] = useState(false)
  const [saveNoteSuccess, setSaveNoteSuccess] = useState(false)

  const fetchLeads = useCallback(async () => {
    setIsLoading(true)
    setFetchError(null)

    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase
          .from('leads')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setLeads(data || [])
      } else {
        // Fallback local storage repository
        const raw = localStorage.getItem('onlinepos_local_leads')
        const parsed: LeadRecord[] = raw ? JSON.parse(raw) : []
        setLeads(parsed)
      }
    } catch (err) {
      console.error('Error fetching leads:', err)
      setFetchError('Failed to load demo requests from database.')
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    let active = true
    async function load() {
      setIsLoading(true)
      setFetchError(null)

      try {
        if (isSupabaseConfigured) {
          const { data, error } = await supabase
            .from('leads')
            .select('*')
            .order('created_at', { ascending: false })

          if (error) throw error
          if (active) setLeads(data || [])
        } else {
          const raw = localStorage.getItem('onlinepos_local_leads')
          const parsed: LeadRecord[] = raw ? JSON.parse(raw) : []
          if (active) setLeads(parsed)
        }
      } catch (err) {
        console.error('Error fetching leads:', err)
        if (active) setFetchError('Failed to load demo requests from database.')
      } finally {
        if (active) setIsLoading(false)
      }
    }
    load()
    return () => {
      active = false
    }
  }, [])

  function openLeadDetails(lead: LeadRecord) {
    setSelectedLead(lead)
    setNoteText(lead.admin_notes || '')
    setSaveNoteSuccess(false)
    setModalError(null)
  }

  async function handleStatusChange(leadId: string, newStatus: StatusType) {
    setModalError(null)
    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase
          .from('leads')
          .update({ status: newStatus, updated_at: new Date().toISOString() })
          .eq('id', leadId)

        if (error) throw error
      } else {
        const raw = localStorage.getItem('onlinepos_local_leads')
        const current: LeadRecord[] = raw ? JSON.parse(raw) : []
        const updated = current.map((l) =>
          l.id === leadId ? { ...l, status: newStatus, updated_at: new Date().toISOString() } : l,
        )
        localStorage.setItem('onlinepos_local_leads', JSON.stringify(updated))
      }

      setLeads((prev) =>
        prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l)),
      )
      if (selectedLead?.id === leadId) {
        setSelectedLead((prev) => (prev ? { ...prev, status: newStatus } : null))
      }
    } catch (err) {
      console.error('Status update failed:', err)
      setModalError('Could not update status. Please try again.')
    }
  }

  async function handleSaveNotes() {
    if (!selectedLead) return
    setIsSavingNote(true)
    setSaveNoteSuccess(false)
    setModalError(null)

    try {
      if (isSupabaseConfigured) {
        const { error } = await supabase
          .from('leads')
          .update({ admin_notes: noteText, updated_at: new Date().toISOString() })
          .eq('id', selectedLead.id)

        if (error) throw error
      } else {
        const raw = localStorage.getItem('onlinepos_local_leads')
        const current: LeadRecord[] = raw ? JSON.parse(raw) : []
        const updated = current.map((l) =>
          l.id === selectedLead.id ? { ...l, admin_notes: noteText, updated_at: new Date().toISOString() } : l,
        )
        localStorage.setItem('onlinepos_local_leads', JSON.stringify(updated))
      }

      setLeads((prev) =>
        prev.map((l) => (l.id === selectedLead.id ? { ...l, admin_notes: noteText } : l)),
      )
      setSelectedLead((prev) => (prev ? { ...prev, admin_notes: noteText } : null))
      setSaveNoteSuccess(true)
      setTimeout(() => setSaveNoteSuccess(false), 3000)
    } catch (err) {
      console.error('Note update failed:', err)
      setModalError('Failed to save internal notes. Please try again.')
    } finally {
      setIsSavingNote(false)
    }
  }

  async function handleLogout() {
    await signOut()
    navigate('/admin/login', { replace: true })
  }

  // Filter & Search Logic
  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      lead.business_name.toLowerCase().includes(query) ||
      lead.contact_name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      (lead.phone && lead.phone.toLowerCase().includes(query))

    return matchesStatus && matchesSearch
  })

  // Overview Counts
  const counts = {
    new: leads.filter((l) => l.status === 'new').length,
    contacted: leads.filter((l) => l.status === 'contacted').length,
    demo_scheduled: leads.filter((l) => l.status === 'demo_scheduled').length,
    converted: leads.filter((l) => l.status === 'converted').length,
    total: leads.length,
  }

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-stone-800 bg-stone-900/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-xl border border-stone-800 bg-stone-950 px-3 py-1.5">
              <img src={logo} alt="onlinePOS logo" className="h-6 w-auto object-contain" />
              <span className="ml-1 rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                Admin
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isLocalDemoSession && (
              <span className="hidden sm:inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 border border-amber-500/20">
                Local Dev Mode
              </span>
            )}
            <span className="hidden text-xs text-stone-400 md:inline">{user?.email}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-stone-700 bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white"
            >
              <LogOut className="mr-1.5 h-3.5 w-3.5" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 space-y-8">
        {/* Title */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Demo Requests</h1>
            <p className="text-sm text-stone-400">Demo requests from your website, ready to follow up</p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={fetchLeads}
            disabled={isLoading}
            className="w-fit border-stone-800 bg-stone-900 text-stone-300 hover:bg-stone-800"
          >
            <RefreshCw className={cn('mr-1.5 h-3.5 w-3.5', isLoading && 'animate-spin')} />
            Refresh
          </Button>
        </div>

        {/* Overview Metrics Cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { label: 'New Requests', count: counts.new, color: 'text-blue-400', border: 'border-blue-500/30' },
            { label: 'Contacted', count: counts.contacted, color: 'text-amber-400', border: 'border-amber-500/30' },
            { label: 'Demo Scheduled', count: counts.demo_scheduled, color: 'text-purple-400', border: 'border-purple-500/30' },
            { label: 'Converted', count: counts.converted, color: 'text-emerald-400', border: 'border-emerald-500/30' },
            { label: 'Total Requests', count: counts.total, color: 'text-stone-200', border: 'border-stone-700' },
          ].map((metric) => (
            <Card key={metric.label} className={cn('border bg-stone-900/80 p-4 shadow-md', metric.border)}>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-400">{metric.label}</p>
              <p className={cn('mt-2 text-2xl font-bold sm:text-3xl', metric.color)}>{metric.count}</p>
            </Card>
          ))}
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-4 rounded-xl border border-stone-800 bg-stone-900 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-3 h-4 w-4 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, business, or email..."
              className="focus-ring w-full rounded-lg border border-stone-800 bg-stone-950 pl-10 pr-4 py-2 text-sm text-white placeholder-stone-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 rounded-lg border border-stone-800 bg-stone-950 p-1">
            {[
              { id: 'all', label: 'All' },
              { id: 'new', label: 'New' },
              { id: 'contacted', label: 'Contacted' },
              { id: 'demo_scheduled', label: 'Scheduled' },
              { id: 'converted', label: 'Converted' },
              { id: 'closed', label: 'Closed' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setStatusFilter(tab.id)}
                className={cn(
                  'rounded-md px-3 py-1.5 text-xs font-medium transition-colors',
                  statusFilter === tab.id
                    ? 'bg-brand-600 text-white font-semibold'
                    : 'text-stone-400 hover:bg-stone-900 hover:text-stone-200',
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fetch Error Banner */}
        {fetchError && (
          <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-950/40 p-4 text-sm text-red-300">
            <AlertCircle className="h-5 w-5 shrink-0" />
            <span>{fetchError}</span>
          </div>
        )}

        {/* Leads Table / List */}
        <div className="overflow-hidden rounded-xl border border-stone-800 bg-stone-900 shadow-xl">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center p-16 text-stone-500 space-y-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-500 border-t-transparent" />
              <p className="text-sm font-medium">Loading requests...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-stone-800 bg-stone-950 text-stone-500 mb-4">
                <Inbox className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-stone-200">
                {leads.length === 0 ? 'No demo requests yet' : 'No requests found'}
              </h3>
              <p className="mt-1 max-w-sm text-xs text-stone-400">
                {leads.length === 0
                  ? 'When potential customers request a demo on your website, their submissions will appear here.'
                  : 'Try adjusting your search criteria or status filter.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-stone-300">
                <thead className="border-b border-stone-800 bg-stone-950/70 text-xs uppercase tracking-wider text-stone-400">
                  <tr>
                    <th className="px-6 py-3.5 font-semibold">Business</th>
                    <th className="px-6 py-3.5 font-semibold">Contact</th>
                    <th className="px-6 py-3.5 font-semibold">Type</th>
                    <th className="px-6 py-3.5 font-semibold">Status</th>
                    <th className="px-6 py-3.5 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/60">
                  {filteredLeads.map((lead) => {
                    const statusConfig = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new
                    return (
                      <tr
                        key={lead.id}
                        onClick={() => openLeadDetails(lead)}
                        className="group cursor-pointer transition-colors hover:bg-stone-800/50"
                      >
                        <td className="px-6 py-4 font-semibold text-white group-hover:text-amber-400">
                          {lead.business_name}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-stone-200">{lead.contact_name}</div>
                          <div className="text-xs text-stone-400">{lead.email}</div>
                        </td>
                        <td className="px-6 py-4 capitalize text-stone-400">{lead.business_type}</td>
                        <td className="px-6 py-4">
                          <span
                            className={cn(
                              'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                              statusConfig.badgeClass,
                            )}
                          >
                            {statusConfig.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-xs text-stone-400">
                          {new Date(lead.created_at).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Lead Detail Modal / Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-stone-800 bg-stone-900 p-6 shadow-2xl space-y-6">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-stone-800 pb-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl font-bold text-white">{selectedLead.business_name}</h2>
                  <span className="rounded bg-stone-800 px-2 py-0.5 text-xs font-semibold capitalize text-amber-400">
                    {selectedLead.business_type}
                  </span>
                </div>
                <p className="mt-1 text-xs text-stone-400 flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  Submitted on {new Date(selectedLead.created_at).toLocaleString()}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedLead(null)}
                className="rounded-lg p-1.5 text-stone-400 transition-colors hover:bg-stone-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {modalError && (
              <div className="flex items-center gap-2.5 rounded-lg border border-red-500/30 bg-red-950/40 p-3 text-xs text-red-300">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{modalError}</span>
              </div>
            )}

            {/* Status Transition Manager */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2">
                Lead Status
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {(['new', 'contacted', 'demo_scheduled', 'converted', 'closed'] as StatusType[]).map((st) => {
                  const isActive = selectedLead.status === st
                  const cfg = STATUS_CONFIG[st]
                  return (
                    <button
                      key={st}
                      type="button"
                      onClick={() => handleStatusChange(selectedLead.id, st)}
                      className={cn(
                        'rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all',
                        isActive
                          ? cfg.badgeClass + ' ring-1 ring-white/20'
                          : 'border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700 hover:text-stone-200',
                      )}
                    >
                      {cfg.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Lead Information Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-xl border border-stone-800 bg-stone-950/60 p-4 text-xs">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-400 font-semibold uppercase tracking-wider text-[11px]">
                  <User className="h-3.5 w-3.5 text-brand-500" />
                  Contact Person
                </div>
                <p className="text-sm font-semibold text-white">{selectedLead.contact_name}</p>
                <p className="flex items-center gap-1.5 text-stone-300">
                  <Mail className="h-3.5 w-3.5 text-stone-500" />
                  {selectedLead.email}
                </p>
                {selectedLead.phone && (
                  <p className="flex items-center gap-1.5 text-stone-300">
                    <Phone className="h-3.5 w-3.5 text-stone-500" />
                    {selectedLead.phone}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-stone-400 font-semibold uppercase tracking-wider text-[11px]">
                  <Building2 className="h-3.5 w-3.5 text-amber-500" />
                  Business Details
                </div>
                <p className="text-sm font-semibold text-white">{selectedLead.business_name}</p>
                <p className="text-stone-300 capitalize">
                  <strong className="text-stone-400">Industry:</strong> {selectedLead.business_type}
                </p>
                <p className="text-stone-300 capitalize">
                  <strong className="text-stone-400">Preferred Contact:</strong> {selectedLead.preferred_contact}
                </p>
              </div>
            </div>

            {/* Interested In Badges */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2.5 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-brand-500" />
                Interested Capabilities
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedLead.interests && selectedLead.interests.length > 0 ? (
                  selectedLead.interests.map((key) => (
                    <span
                      key={key}
                      className="inline-flex items-center gap-1 rounded-md border border-brand-500/30 bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-300"
                    >
                      <Sparkles className="h-3 w-3 text-amber-400" />
                      {INTEREST_LABELS[key] || key}
                    </span>
                  ))
                ) : (
                  <span className="text-xs text-stone-500 italic">No specific interests selected</span>
                )}
              </div>
            </div>

            {/* Customer Message */}
            {selectedLead.message && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2 flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5 text-amber-500" />
                  Customer Message
                </h4>
                <div className="rounded-xl border border-stone-800 bg-stone-950 p-3.5 text-xs text-stone-300 leading-relaxed">
                  {selectedLead.message}
                </div>
              </div>
            )}

            {/* Internal Admin Notes */}
            <div className="space-y-2 border-t border-stone-800 pt-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-400">
                Internal Admin Notes (Private)
              </label>
              <textarea
                rows={3}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add private follow-up notes, call history, or deal details..."
                className="focus-ring w-full rounded-xl border border-stone-800 bg-stone-950 p-3 text-xs text-white placeholder-stone-600"
              />
              <div className="flex items-center justify-between">
                {saveNoteSuccess ? (
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Notes saved successfully!
                  </span>
                ) : (
                  <span />
                )}
                <Button
                  type="button"
                  size="sm"
                  onClick={handleSaveNotes}
                  disabled={isSavingNote}
                  className="bg-brand-600 hover:bg-brand-500"
                >
                  <Save className="mr-1.5 h-3.5 w-3.5" />
                  {isSavingNote ? 'Saving...' : 'Save Notes'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
