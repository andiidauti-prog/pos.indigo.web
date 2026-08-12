import type { Translations } from '@/types/i18n'

/**
 * English — a faithful translation of mk.ts's meaning. No claims, features,
 * or information are added beyond the Macedonian source.
 */
export const en: Translations = {
  nav: {
    home: 'Home',
    features: 'Features',
    businesses: 'Businesses',
    about: 'About',
    contact: 'Contact',
    requestDemo: 'Request a demo',
    contactSales: 'Contact us',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  footer: {
    productGroup: 'Product',
    companyGroup: 'Company',
    languagesLabel: 'Languages',
    copyright: '© {year} onlinePOS. All rights reserved.',
  },
  languageSelector: {
    selectLanguage: 'Select language',
  },
  hero: {
    eyebrow: 'onlinePOS',
    headlineLines: ['Your business.', 'Under your control.'],
    supportingText: 'A modern POS system for sales, inventory, fiscalization, and managing your business.',
  },
  coreCapabilities: {
    eyebrow: 'POWER AND CONTROL',
    headline: 'Everything you need. In one place.',
    supportingText:
      'onlinePOS brings together sales, inventory, fiscalization, and management of your business in one solution.',
    items: {
      sales: {
        title: 'Sales',
        description: 'Complete sales quickly and easily through a modern POS interface.',
      },
      inventory: {
        title: 'Inventory',
        description: "Track and manage your business's inventory from one place.",
      },
      fiscalization: {
        title: 'Fiscalization',
        description: 'Fiscalize your sales directly through onlinePOS.',
      },
      reports: {
        title: 'Statistics and reports',
        description: "View statistics and reports on your business's operations.",
      },
      remoteManagement: {
        title: 'Remote management',
        description: 'Manage and monitor your business remotely, at any time.',
      },
      payments: {
        title: 'Payments',
        description: 'Accept payments in cash, by card, and through other methods.',
      },
    },
  },
  industries: {
    eyebrow: 'FOR DIFFERENT BUSINESSES',
    headline: 'One POS. Different businesses.',
    supportingText:
      'Regardless of your type of business, onlinePOS helps you manage your everyday sales and operational processes from one place.',
    items: {
      restaurants: {
        title: 'Restaurants',
        description: "onlinePOS helps restaurants organize their everyday operations and sales.",
      },
      stores: {
        title: 'Stores',
        description: 'Stores can use onlinePOS for simpler everyday operations and sales.',
      },
      warehouses: {
        title: 'Warehouses',
        description: 'onlinePOS is also suited for businesses where tracking and managing inventory is key.',
      },
      other: {
        title: 'Other businesses',
        description: 'onlinePOS can also be adapted to other types of businesses, depending on their operational needs.',
      },
    },
  },
  productShowcase: {
    eyebrow: 'PRODUCT OVERVIEW',
    headline: 'Your business, in one place.',
    supportingText:
      "From sales and inventory to statistics and management — onlinePOS lets you follow your business's key activities from one place.",
    highlights: [
      { title: 'Sales', description: 'Manage everyday sales through a simple interface.' },
      { title: 'Inventory', description: "Track your business's inventory from one place." },
      { title: 'Management', description: "Have insight and control over your business's operations." },
    ],
    visualLabel: 'Visual preview of the product (coming soon)',
  },
  businessManagement: {
    eyebrow: 'MANAGE YOUR BUSINESS',
    headline: 'Always have an overview of your operations.',
    supportingText:
      'Follow the key aspects of your business and manage sales, inventory, and business data from one place.',
    areas: {
      reports: {
        title: 'Statistics and reports',
        description: "Access statistics and reports that give you an overview of your business's operations.",
      },
      remoteManagement: {
        title: 'Remote management',
        description: 'Manage your business remotely, through onlinePOS.',
      },
      inventorySales: {
        title: 'Inventory and sales',
        description: 'Sales and inventory are managed together, from one place.',
      },
    },
    visualLabel: 'Visual preview of business management (coming soon)',
  },
  fiscalization: {
    eyebrow: 'FISCALIZATION',
    headline: 'Fiscalization, part of your everyday operations.',
    supportingText:
      'onlinePOS includes fiscalization as part of the sales process, to make your operations simpler and more organized.',
    supportingStatement: 'Fiscalization is integrated directly into the sales flow in onlinePOS.',
    visualLabel: 'Visual preview of fiscalization (coming soon)',
  },
  payments: {
    eyebrow: 'PAYMENTS',
    headline: 'More ways to pay. One place to sell.',
    supportingText: 'onlinePOS supports working with different payment methods, including cash and cards.',
    methods: {
      cash: {
        title: 'Cash',
        description: 'Accept cash payments as part of everyday sales.',
      },
      card: {
        title: 'Card',
        description: 'Accept card payments directly through onlinePOS.',
      },
      other: {
        title: 'Other methods',
        description: 'Support for other payment methods as well, depending on business needs.',
      },
    },
    visualLabel: 'Visual preview of payments (coming soon)',
  },
  contact: {
    eyebrow: 'CONTACT US',
    headline: 'Find out how onlinePOS can help your business.',
    supportingText: 'Request a demo or contact our sales team for more information.',
    form: {
      nameLabel: 'Name',
      companyLabel: 'Company',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      businessTypeLabel: 'Business type',
      businessTypePlaceholder: 'Select business type',
      businessTypeOptions: {
        restaurant: 'Restaurant',
        store: 'Store',
        warehouse: 'Warehouse',
        other: 'Other',
      },
      messageLabel: 'Message',
      requiredFieldNote: '* Required field',
      submitLabel: 'Send',
      submittingLabel: 'Sending...',
      submittedMessage: 'The form is ready to be connected to the sending system.',
    },
  },
  finalCta: {
    eyebrow: 'REQUEST A DEMO',
    headline: 'Meet onlinePOS.',
    supportingText: 'Learn more about the solution and talk to our team.',
    primaryCta: 'Request a demo',
  },
}
