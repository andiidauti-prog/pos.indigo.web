import type { Translations } from '@/types/i18n'

/**
 * English — a faithful translation of mk.ts's meaning. No claims, features,
 * or information are added beyond the Macedonian source.
 */
export const en: Translations = {
  nav: {
    home: 'Home',
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
    copyright: '© {year} OninePOS. All rights reserved.',
  },
  languageSelector: {
    selectLanguage: 'Select language',
  },
  hero: {
    eyebrow: 'OninePOS',
    headlineLines: ['Your business.', 'Under your control.'],
    supportingText: 'A modern POS system for sales, inventory, fiscalization, and managing your business.',
  },
  coreCapabilities: {
    eyebrow: 'POWER AND CONTROL',
    headline: 'Everything you need. In one place.',
    supportingText:
      'OninePOS brings together sales, inventory, fiscalization, and management of your business in one solution.',
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
        description: 'Fiscalize your sales directly through OninePOS.',
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
      'Regardless of your type of business, OninePOS helps you manage your everyday sales and operational processes from one place.',
    items: {
      restaurants: {
        title: 'Restaurants',
        description: "OninePOS helps restaurants organize their everyday operations and sales.",
      },
      stores: {
        title: 'Stores',
        description: 'Stores can use OninePOS for simpler everyday operations and sales.',
      },
      warehouses: {
        title: 'Warehouses',
        description: 'OninePOS is also suited for businesses where tracking and managing inventory is key.',
      },
      other: {
        title: 'Other businesses',
        description: 'OninePOS can also be adapted to other types of businesses, depending on their operational needs.',
      },
    },
  },
  productShowcase: {
    eyebrow: 'PRODUCT OVERVIEW',
    headline: 'Your business, in one place.',
    supportingText:
      "From sales and inventory to statistics and management — OninePOS lets you follow your business's key activities from one place.",
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
        description: 'Manage your business remotely, through OninePOS.',
      },
      inventorySales: {
        title: 'Inventory and sales',
        description: 'Sales and inventory are managed together, from one place.',
      },
    },
    highlight: {
      primary: 'Sales • Stock • Staff • Statistics',
      secondary: 'Generate PDF reports for a full period or for specific selected dates.',
    },
    visualLabel: 'Visual preview of business management (coming soon)',
  },
  fiscalization: {
    eyebrow: 'FISCALIZATION',
    headline: 'Fiscalization, part of your everyday operations.',
    supportingText:
      'OninePOS includes fiscalization as part of the sales process, to make your operations simpler and more organized.',
    supportingStatement: 'Fiscalization is integrated directly into the sales flow in OninePOS.',
    visualLabel: 'Visual preview of fiscalization (coming soon)',
  },
  payments: {
    eyebrow: 'PAYMENTS',
    headline: 'More ways to pay. One place to sell.',
    supportingText: 'OninePOS supports working with different payment methods, including cash and cards.',
    methods: {
      cash: {
        title: 'Cash',
        description: 'Accept cash payments as part of everyday sales.',
      },
      card: {
        title: 'Card',
        description: 'Accept card payments directly through OninePOS.',
      },
      other: {
        title: 'Other methods',
        description: 'Support for other payment methods as well, depending on business needs.',
      },
    },
    visualLabel: 'Visual preview of payments (coming soon)',
  },
  contact: {
    eyebrow: 'REQUEST A DEMO',
    headline: 'Find out how OninePOS can power your business.',
    supportingText: 'Complete this quick step-by-step request and our team will get in touch.',
  },
  demoWizard: {
    stepIndicator: 'Step {current} of {total}',
    steps: {
      step1: {
        title: 'Contact Information',
        description: 'Provide your details so our team can reach out.',
        fullName: 'Full name',
        businessName: 'Business name',
        email: 'Email address',
        phone: 'Phone number',
      },
      step2: {
        title: 'Tell us about your business',
        description: 'Select the primary industry that describes your operation.',
        options: {
          restaurant: 'Restaurant / Cafe',
          shop: 'Shop / Retail',
          warehouse: 'Warehouse / Wholesale',
          other: 'Other Business',
        },
      },
      step3: {
        title: 'What are you interested in?',
        description: 'Select all features relevant to your business needs.',
        options: {
          pos: 'Point of Sale (POS)',
          stock: 'Stock Management',
          fiscalization: 'Fiscalization',
          reports: 'Reports & Statistics',
          multiLocation: 'Multiple Locations',
          other: 'Other Capabilities',
        },
      },
      step4: {
        title: 'Additional information',
        description: "Tell us a little more about what you're looking for.",
        placeholder: 'Describe your current setup, hardware needs, or timeline...',
      },
      step5: {
        title: 'Preferred contact method',
        description: 'How would you prefer our sales team to reach you?',
        options: {
          phone: 'Phone call',
          email: 'Email',
          either: 'Either phone or email',
        },
        summary: {
          title: 'Request summary',
          contactLabel: 'Contact',
          emailLabel: 'Email',
          interestsLabel: '{count} feature area(s) selected',
        },
        submitButton: 'Request a Demo',
      },
    },
    confirmation: {
      title: 'Request received',
      message: "Thank you for your interest in OninePOS. We'll get back to you shortly.",
      submitAnother: 'Submit another request',
    },
    navigation: {
      back: 'Back',
      next: 'Continue',
      submitting: 'Submitting request...',
    },
    validation: {
      nameRequired: 'Full name is required',
      businessNameRequired: 'Business name is required',
      emailRequired: 'Email address is required',
      emailInvalid: 'Please enter a valid email address',
      phoneRequired: 'Phone number is required',
      businessTypeRequired: 'Please select a business type',
      interestsRequired: 'Please select at least one interest',
      preferredContactRequired: 'Please select a preferred contact method',
      submitFailed: 'Submission failed. Please check your connection and try again.',
    },
  },
  finalCta: {
    eyebrow: 'REQUEST A DEMO',
    headline: 'Meet OninePOS.',
    supportingText: 'Learn more about the solution and talk to our team.',
    primaryCta: 'Request a demo',
  },
}
