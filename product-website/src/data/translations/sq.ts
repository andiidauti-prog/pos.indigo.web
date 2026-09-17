import type { Translations } from '@/types/i18n'

/**
 * Albanian — a faithful translation of mk.ts's meaning. No claims, features,
 * or information are added beyond the Macedonian source.
 */
export const sq: Translations = {
  nav: {
    home: 'Ballina',
    contact: 'Kontakt',
    requestDemo: 'Kërkoni demo',
    contactSales: 'Na kontaktoni',
    openMenu: 'Hap menynë',
    closeMenu: 'Mbyll menynë',
  },
  footer: {
    productGroup: 'Produkti',
    companyGroup: 'Kompania',
    languagesLabel: 'Gjuhët',
    copyright: '© {year} onlinePOS. Të gjitha të drejtat e rezervuara.',
  },
  languageSelector: {
    selectLanguage: 'Zgjidhni gjuhën',
  },
  hero: {
    eyebrow: 'onlinePOS',
    headlineLines: ['Biznesi juaj.', 'Nën kontrollin tuaj.'],
    supportingText: 'Sistem modern POS për shitje, inventar, fiskalizim dhe menaxhim të biznesit tuaj.',
  },
  coreCapabilities: {
    eyebrow: 'FUQI DHE KONTROLL',
    headline: 'Gjithçka që ju nevojitet. Në një vend.',
    supportingText:
      'onlinePOS bashkon shitjen, inventarin, fiskalizimin dhe menaxhimin e biznesit tuaj në një zgjidhje të vetme.',
    items: {
      sales: {
        title: 'Shitja',
        description: 'Kryeni shitje shpejt dhe thjesht përmes një ndërfaqeje moderne POS.',
      },
      inventory: {
        title: 'Inventari',
        description: 'Ndiqni dhe menaxhoni inventarin e biznesit tuaj nga një vend.',
      },
      fiscalization: {
        title: 'Fiskalizimi',
        description: 'Fiskalizoni shitjet tuaja direkt përmes onlinePOS.',
      },
      reports: {
        title: 'Statistika dhe raporte',
        description: 'Shikoni statistika dhe raporte për funksionimin e biznesit tuaj.',
      },
      remoteManagement: {
        title: 'Menaxhim në distancë',
        description: 'Menaxhoni dhe ndiqni biznesin tuaj nga distanca, në çdo kohë.',
      },
      payments: {
        title: 'Pagesat',
        description: 'Pranoni pagesa në para në dorë, me kartelë dhe në mënyra të tjera.',
      },
    },
  },
  industries: {
    eyebrow: 'PËR BIZNESE TË NDRYSHME',
    headline: 'Një POS. Biznese të ndryshme.',
    supportingText:
      'Pavarësisht llojit të biznesit tuaj, onlinePOS ju ndihmon të menaxhoni proceset e përditshme të shitjes dhe operacionale nga një vend.',
    items: {
      restaurants: {
        title: 'Restorante',
        description: 'onlinePOS u ndihmon restoranteve të organizojnë punën dhe shitjen e përditshme.',
      },
      stores: {
        title: 'Dyqane',
        description: 'Dyqanet mund ta përdorin onlinePOS për punë dhe shitje të përditshme më të thjeshtë.',
      },
      warehouses: {
        title: 'Depo',
        description:
          'onlinePOS është i përshtatshëm edhe për bizneset ku ndjekja dhe menaxhimi i inventarit janë të rëndësisë kyçe.',
      },
      other: {
        title: 'Biznese të tjera',
        description:
          'onlinePOS mund të përshtatet edhe për lloje të tjera biznesesh, në varësi të nevojave të tyre operacionale.',
      },
    },
  },
  productShowcase: {
    eyebrow: 'PASQYRA E PRODUKTIT',
    headline: 'Biznesi juaj, në një vend.',
    supportingText:
      'Nga shitja dhe inventari deri te statistikat dhe menaxhimi — onlinePOS ju mundëson të ndiqni aktivitetet kyçe të biznesit tuaj nga një vend.',
    highlights: [
      { title: 'Shitja', description: 'Menaxhoni shitjen e përditshme përmes një ndërfaqeje të thjeshtë.' },
      { title: 'Inventari', description: 'Ndiqni inventarin e biznesit tuaj nga një vend.' },
      { title: 'Menaxhimi', description: 'Kini pasqyrë dhe kontroll mbi funksionimin e biznesit tuaj.' },
    ],
    visualLabel: 'Pamje vizuale e produktit (së shpejti)',
  },
  businessManagement: {
    eyebrow: 'MENAXHONI BIZNESIN',
    headline: 'Gjithmonë me pasqyrë mbi punën tuaj.',
    supportingText:
      'Ndiqni aspektet kyçe të biznesit tuaj dhe menaxhoni shitjen, inventarin dhe të dhënat e biznesit nga një vend.',
    areas: {
      reports: {
        title: 'Statistika dhe raporte',
        description: 'Qasuni në statistika dhe raporte që ju japin pasqyrë mbi funksionimin e biznesit.',
      },
      remoteManagement: {
        title: 'Menaxhim në distancë',
        description: 'Menaxhoni biznesin tuaj nga distanca, përmes onlinePOS.',
      },
      inventorySales: {
        title: 'Inventari dhe shitja',
        description: 'Shitja dhe inventari menaxhohen së bashku, nga një vend.',
      },
    },
    visualLabel: 'Pamje vizuale e menaxhimit të biznesit (së shpejti)',
  },
  fiscalization: {
    eyebrow: 'FISKALIZIMI',
    headline: 'Fiskalizimi, pjesë e punës suaj të përditshme.',
    supportingText:
      'onlinePOS e përfshin fiskalizimin si pjesë të procesit të shitjes, me qëllim që puna juaj të jetë më e thjeshtë dhe më e organizuar.',
    supportingStatement: 'Fiskalizimi është i integruar direkt në rrjedhën e shitjes në onlinePOS.',
    visualLabel: 'Pamje vizuale e fiskalizimit (së shpejti)',
  },
  payments: {
    eyebrow: 'PAGESAT',
    headline: 'Më shumë mënyra pagese. Një vend për shitje.',
    supportingText: 'onlinePOS mundëson punën me mënyra të ndryshme pagese, duke përfshirë para në dorë dhe kartela.',
    methods: {
      cash: {
        title: 'Para në dorë',
        description: 'Pranoni pagesa me para në dorë si pjesë e shitjes së përditshme.',
      },
      card: {
        title: 'Kartelë',
        description: 'Pranoni pagesa me kartelë direkt përmes onlinePOS.',
      },
      other: {
        title: 'Mënyra të tjera',
        description: 'Mbështetje edhe për mënyra të tjera pagese, sipas nevojave të biznesit.',
      },
    },
    visualLabel: 'Pamje vizuale e pagesave (së shpejti)',
  },
  contact: {
    eyebrow: 'KËRKONI DEMO',
    headline: 'Zbuloni si onlinePOS mund të ndihmojë biznesin tuaj.',
    supportingText: 'Plotësoni këtë kërkesë të shpejtë hap pas hapi dhe ekipi ynë do t’ju kontaktojë.',
  },
  demoWizard: {
    stepIndicator: 'Hapi {current} nga {total}',
    steps: {
      step1: {
        title: 'Informatat e kontaktit',
        description: 'Jepni të dhënat tuaja që ekipi ynë t’ju kontaktojë.',
        fullName: 'Emri dhe mbiemri',
        businessName: 'Emri i biznesit',
        email: 'Adresa email',
        phone: 'Numri i telefonit',
      },
      step2: {
        title: 'Na tregoni për biznesin tuaj',
        description: 'Zgjidhni sektorin kryesor që përshkruan veprimtarinë tuaj.',
        options: {
          restaurant: 'Restorant / Kafene',
          shop: 'Dyqan / Shitje me pakicë',
          warehouse: 'Depo / Shitje me shumicë',
          other: 'Biznes tjetër',
        },
      },
      step3: {
        title: 'Për çfarë jeni të interesuar?',
        description: 'Zgjidhni të gjitha funksionalitetet që ju nevojiten.',
        options: {
          pos: 'Pikë Shitjeje (POS)',
          stock: 'Menaxhim i stokut',
          fiscalization: 'Fiskalizim',
          reports: 'Raporte dhe statistika',
          multiLocation: 'Lokacione të shumta',
          other: 'Funksionalitete të tjera',
        },
      },
      step4: {
        title: 'Informata shtesë',
        description: 'Na tregoni pak më shumë për atë që kërkoni.',
        placeholder: 'Përshkruani nevojat tuaja, pajisjet ose afatin kohor...',
      },
      step5: {
        title: 'Mënyra e preferuar e kontaktit',
        description: 'Si dëshironi që ekipi ynë i shitjeve t’ju kontaktojë?',
        options: {
          phone: 'Thirrje telefonike',
          email: 'Email',
          either: 'Cilado mënyrë (telefon ose email)',
        },
        summary: {
          title: 'Përmbledhje e kërkesës',
          contactLabel: 'Kontakti',
          emailLabel: 'Email',
          interestsLabel: '{count} fusha funksionale të zgjedhura',
        },
        submitButton: 'Kërkoni një Demo',
      },
    },
    confirmation: {
      title: 'Kërkesa u pranua',
      message: 'Faleminderit për interesimin tuaj për onlinePOS. Do t’ju kontaktojmë së shpejti.',
      submitAnother: 'Dërgoni një kërkesë tjetër',
    },
    navigation: {
      back: 'Mbrapa',
      next: 'Vazhdo',
      submitting: 'Duke dërguar kërkesën...',
    },
    validation: {
      nameRequired: 'Shkruani emrin dhe mbiemrin',
      businessNameRequired: 'Shkruani emrin e biznesit',
      emailRequired: 'Shkruani adresën email',
      emailInvalid: 'Ju lutemi shkruani një adresë email të vlefshme',
      phoneRequired: 'Numri i telefonit është i detyrueshëm',
      businessTypeRequired: 'Zgjidhni llojin e biznesit',
      interestsRequired: 'Zgjidhni të paktën një opsion',
      preferredContactRequired: 'Zgjidhni mënyrën e preferuar të kontaktit',
      submitFailed: 'Dërgimi dështoi. Ju lutemi kontrolloni lidhjen tuaj dhe provoni përsëri.',
    },
  },
  finalCta: {
    eyebrow: 'KËRKONI DEMO',
    headline: 'Njihuni me onlinePOS.',
    supportingText: 'Mësoni më shumë rreth zgjidhjes dhe bisedoni me ekipin tonë.',
    primaryCta: 'Kërkoni demo',
  },
}
