export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface ProductStep {
  number: number;
  title: string;
  description: string;
}

export interface ProductBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ProductPricing {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  badge?: 'POPULER' | 'TERBARU';
  tagline: string;
  description: string;
  benefits: string[];
  features: ProductFeature[];
  steps: ProductStep[];
  productBenefits: ProductBenefit[];
  pricing: ProductPricing[];
  faqs: ProductFAQ[];
  relatedProducts: string[];
}

export const products: Product[] = [
  {
    slug: 'satellite-erp',
    name: 'Satellite ERP',
    shortName: 'ERP',
    icon: '🔴',
    color: 'bg-red-100 text-red-600',
    badge: 'POPULER',
    tagline: 'Software ERP terintegrasi untuk bisnis modern',
    description: 'Sistem ERP terintegrasi yang menghubungkan seluruh aspek bisnis Anda dalam satu platform. Dari keuangan, inventori, hingga HR - semua terkelola dengan efisien dan real-time.',
    benefits: [
      'Integrasi seluruh departemen dalam satu sistem',
      'Laporan keuangan real-time dan akurat',
      'Automasi proses bisnis untuk efisiensi maksimal',
      'Skalabel untuk pertumbuhan bisnis Anda',
    ],
    features: [
      {
        icon: '💰',
        title: 'Financial Management',
        description: 'Kelola keuangan bisnis dengan akurat',
        bullets: ['General Ledger', 'Accounts Payable/Receivable', 'Budget Management', 'Financial Reporting'],
      },
      {
        icon: '📦',
        title: 'Inventory & Supply Chain',
        description: 'Optimasi rantai pasok Anda',
        bullets: ['Stock Management', 'Purchase Orders', 'Supplier Management', 'Warehouse Operations'],
      },
      {
        icon: '👥',
        title: 'Human Resource Management',
        description: 'Kelola SDM dengan efektif',
        bullets: ['Employee Database', 'Payroll Processing', 'Leave Management', 'Performance Tracking'],
      },
      {
        icon: '📊',
        title: 'Business Intelligence',
        description: 'Analisis data untuk keputusan tepat',
        bullets: ['Real-time Dashboard', 'Custom Reports', 'Data Visualization', 'Predictive Analytics'],
      },
      {
        icon: '🏭',
        title: 'Manufacturing',
        description: 'Kelola produksi dengan efisien',
        bullets: ['Bill of Materials', 'Work Orders', 'Quality Control', 'Production Planning'],
      },
      {
        icon: '🛒',
        title: 'Sales & Distribution',
        description: 'Maksimalkan penjualan Anda',
        bullets: ['Order Management', 'Pricing Management', 'Sales Analytics', 'Distribution Tracking'],
      },
    ],
    steps: [
      { number: 1, title: 'Konsultasi Kebutuhan', description: 'Tim ahli kami akan menganalisis kebutuhan bisnis Anda secara mendalam' },
      { number: 2, title: 'Customization & Setup', description: 'Konfigurasi sistem sesuai dengan proses bisnis unik perusahaan Anda' },
      { number: 3, title: 'Training & Implementation', description: 'Pelatihan komprehensif untuk tim Anda agar siap menggunakan sistem' },
      { number: 4, title: 'Go Live & Support', description: 'Pendampingan penuh saat sistem live dan dukungan berkelanjutan' },
    ],
    productBenefits: [
      { icon: '⚡', title: 'Tingkatkan Efisiensi Operasional hingga 50%', description: 'Automasi proses manual dan eliminasi redundansi data untuk produktivitas maksimal.' },
      { icon: '💰', title: 'Hemat Biaya Operasional', description: 'Kurangi biaya IT dengan sistem terintegrasi dan eliminasi multiple software.' },
      { icon: '📈', title: 'Keputusan Bisnis Lebih Akurat', description: 'Data real-time dan analytics membantu pengambilan keputusan yang tepat waktu.' },
      { icon: '🔒', title: 'Keamanan Data Terjamin', description: 'Enkripsi end-to-end dan access control untuk melindungi data sensitif bisnis.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Rp 5 Juta', description: 'Untuk bisnis kecil', features: ['5 User', 'Basic Modules', 'Email Support', 'Cloud Hosting'], popular: false },
      { name: 'Business', price: 'Rp 15 Juta', description: 'Untuk bisnis berkembang', features: ['25 User', 'All Modules', 'Priority Support', 'Cloud Hosting', 'Custom Reports'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: 'Untuk korporasi', features: ['Unlimited User', 'All Modules', '24/7 Support', 'On-premise Option', 'Full Customization'], popular: false },
    ],
    faqs: [
      { question: 'Apa itu Satellite ERP?', answer: 'Satellite ERP adalah sistem Enterprise Resource Planning terintegrasi yang menghubungkan semua departemen bisnis Anda dalam satu platform, memungkinkan pengelolaan yang lebih efisien dan keputusan berbasis data.' },
      { question: 'Berapa lama waktu implementasi?', answer: 'Waktu implementasi bervariasi tergantung kompleksitas bisnis, umumnya 2-6 bulan untuk implementasi penuh dengan customization.' },
      { question: 'Apakah tersedia training?', answer: 'Ya, kami menyediakan training komprehensif untuk seluruh tim Anda, baik on-site maupun online, termasuk dokumentasi dan video tutorial.' },
      { question: 'Bagaimana dengan support setelah implementasi?', answer: 'Kami menyediakan dukungan berkelanjutan dengan berbagai tier support sesuai paket yang dipilih, termasuk hotline, email, dan on-site support.' },
      { question: 'Apakah bisa dikustomisasi?', answer: 'Tentu! Satellite ERP sangat fleksibel dan dapat dikustomisasi sesuai dengan proses bisnis unik perusahaan Anda.' },
    ],
    relatedProducts: ['satellite-crm', 'satellite-accounting', 'satellite-inventory'],
  },
  {
    slug: 'satellite-crm',
    name: 'Satellite CRM',
    shortName: 'CRM',
    icon: '🔵',
    color: 'bg-blue-100 text-blue-600',
    badge: 'TERBARU',
    tagline: 'Software CRM & customer management',
    description: 'Platform CRM lengkap untuk mengelola hubungan pelanggan, meningkatkan penjualan, dan memberikan layanan terbaik. Pantau setiap interaksi dan maksimalkan nilai pelanggan.',
    benefits: [
      'Pantau seluruh customer journey dalam satu dashboard',
      'Automasi sales pipeline untuk closing lebih cepat',
      'Customer segmentation untuk marketing targeted',
      'Analisis performa tim sales real-time',
    ],
    features: [
      { icon: '🎯', title: 'Lead Management', description: 'Kelola prospek dengan efektif', bullets: ['Lead Capture', 'Lead Scoring', 'Lead Nurturing', 'Conversion Tracking'] },
      { icon: '📈', title: 'Sales Pipeline', description: 'Optimalkan proses penjualan', bullets: ['Pipeline Stages', 'Deal Tracking', 'Sales Forecasting', 'Win/Loss Analysis'] },
      { icon: '💬', title: 'Customer Support', description: 'Layanan pelanggan terbaik', bullets: ['Ticket Management', 'SLA Tracking', 'Knowledge Base', 'Customer Portal'] },
      { icon: '📧', title: 'Marketing Automation', description: 'Automasi kampanye marketing', bullets: ['Email Campaigns', 'Campaign Analytics', 'A/B Testing', 'Drip Campaigns'] },
      { icon: '📊', title: 'Analytics & Reports', description: 'Insight untuk keputusan tepat', bullets: ['Sales Reports', 'Performance Dashboard', 'Custom Analytics', 'Export Options'] },
      { icon: '🔗', title: 'Integrations', description: 'Terhubung dengan tools lain', bullets: ['Email Integration', 'Calendar Sync', 'API Access', 'Third-party Apps'] },
    ],
    steps: [
      { number: 1, title: 'Konsultasi Kebutuhan', description: 'Analisis proses sales dan customer service Anda saat ini' },
      { number: 2, title: 'Customization & Setup', description: 'Konfigurasi pipeline, fields, dan automasi sesuai kebutuhan' },
      { number: 3, title: 'Training & Implementation', description: 'Pelatihan tim sales dan customer service Anda' },
      { number: 4, title: 'Go Live & Support', description: 'Migrasi data dan dukungan pasca implementasi' },
    ],
    productBenefits: [
      { icon: '📈', title: 'Tingkatkan Penjualan hingga 35%', description: 'Pipeline yang terorganisir dan follow-up otomatis meningkatkan conversion rate.' },
      { icon: '⏱️', title: 'Respon Pelanggan Lebih Cepat', description: 'Sistem ticketing dan SLA tracking memastikan kepuasan pelanggan.' },
      { icon: '🎯', title: 'Marketing Lebih Targeted', description: 'Segmentasi pelanggan memungkinkan kampanye yang lebih personal dan efektif.' },
      { icon: '👁️', title: 'Visibilitas Penuh Tim Sales', description: 'Dashboard real-time untuk memantau performa dan target pencapaian.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Rp 3 Juta', description: 'Untuk tim kecil', features: ['5 User', 'Basic CRM', 'Email Support', 'Cloud Hosting'], popular: false },
      { name: 'Business', price: 'Rp 10 Juta', description: 'Untuk tim berkembang', features: ['20 User', 'Full CRM', 'Priority Support', 'Automation', 'Analytics'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: 'Untuk tim besar', features: ['Unlimited User', 'Full Features', '24/7 Support', 'API Access', 'Custom Dev'], popular: false },
    ],
    faqs: [
      { question: 'Apa itu Satellite CRM?', answer: 'Satellite CRM adalah platform Customer Relationship Management untuk mengelola hubungan pelanggan, sales pipeline, dan customer support dalam satu sistem terintegrasi.' },
      { question: 'Berapa lama waktu implementasi?', answer: 'Implementasi CRM umumnya lebih cepat, sekitar 2-4 minggu untuk setup dasar hingga 2 bulan untuk customization penuh.' },
      { question: 'Apakah bisa import data pelanggan yang sudah ada?', answer: 'Ya, kami menyediakan tools import data dari Excel, CSV, atau sistem CRM lain yang Anda gunakan sebelumnya.' },
      { question: 'Apakah terintegrasi dengan email dan calendar?', answer: 'Ya, Satellite CRM terintegrasi dengan Gmail, Outlook, Google Calendar, dan berbagai platform email lainnya.' },
      { question: 'Bagaimana dengan mobile access?', answer: 'Tersedia aplikasi mobile untuk iOS dan Android sehingga tim sales bisa akses CRM dari mana saja.' },
    ],
    relatedProducts: ['satellite-erp', 'satellite-ecommerce', 'satellite-pos'],
  },
  {
    slug: 'satellite-hris',
    name: 'Satellite HRIS',
    shortName: 'HRIS',
    icon: '🟢',
    color: 'bg-green-100 text-green-600',
    tagline: 'Software HR & manajemen karyawan',
    description: 'Sistem HRIS modern untuk mengelola seluruh siklus karyawan dari rekrutmen hingga offboarding. Automasi HR untuk fokus pada pengembangan talenta.',
    benefits: [
      'Kelola data karyawan terpusat dan aman',
      'Automasi payroll dan penghitungan pajak',
      'Self-service portal untuk karyawan',
      'Analisis HR untuk keputusan strategis',
    ],
    features: [
      { icon: '👤', title: 'Employee Database', description: 'Data karyawan terpusat', bullets: ['Profile Management', 'Document Storage', 'Organization Chart', 'Employee Directory'] },
      { icon: '💵', title: 'Payroll Management', description: 'Gaji otomatis dan akurat', bullets: ['Salary Calculation', 'Tax Computation', 'Payslip Generation', 'Bank Integration'] },
      { icon: '📅', title: 'Attendance & Leave', description: 'Kelola kehadiran mudah', bullets: ['Time Tracking', 'Leave Requests', 'Overtime Management', 'Attendance Reports'] },
      { icon: '🎯', title: 'Performance Management', description: 'Evaluasi kinerja efektif', bullets: ['Goal Setting', 'Performance Reviews', '360 Feedback', 'Development Plans'] },
      { icon: '🎓', title: 'Learning & Development', description: 'Kembangkan talenta', bullets: ['Training Programs', 'E-learning', 'Skill Tracking', 'Certification Management'] },
      { icon: '📊', title: 'HR Analytics', description: 'Insight SDM berbasis data', bullets: ['Headcount Analysis', 'Turnover Reports', 'Compensation Analytics', 'Custom Dashboards'] },
    ],
    steps: [
      { number: 1, title: 'Konsultasi Kebutuhan', description: 'Analisis proses HR dan kebijakan perusahaan Anda' },
      { number: 2, title: 'Customization & Setup', description: 'Konfigurasi struktur organisasi, payroll, dan policies' },
      { number: 3, title: 'Training & Implementation', description: 'Pelatihan tim HR dan sosialisasi ke seluruh karyawan' },
      { number: 4, title: 'Go Live & Support', description: 'Migrasi data karyawan dan pendampingan operasional' },
    ],
    productBenefits: [
      { icon: '⏱️', title: 'Hemat 70% Waktu Administrasi HR', description: 'Automasi proses manual seperti payroll, cuti, dan laporan.' },
      { icon: '📋', title: 'Kepatuhan Regulasi Terjamin', description: 'Update otomatis untuk regulasi ketenagakerjaan dan pajak.' },
      { icon: '😊', title: 'Tingkatkan Employee Experience', description: 'Self-service portal memudahkan karyawan mengakses informasi.' },
      { icon: '📈', title: 'Data-driven HR Decisions', description: 'Analytics membantu strategi talent management yang tepat.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Rp 2 Juta', description: 'Untuk 50 karyawan', features: ['Basic HRIS', 'Attendance', 'Leave Management', 'Email Support'], popular: false },
      { name: 'Business', price: 'Rp 8 Juta', description: 'Untuk 200 karyawan', features: ['Full HRIS', 'Payroll', 'Performance', 'Priority Support', 'Analytics'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: '200+ karyawan', features: ['Unlimited Employees', 'All Features', '24/7 Support', 'Custom Integration', 'On-premise'], popular: false },
    ],
    faqs: [
      { question: 'Apa itu Satellite HRIS?', answer: 'Satellite HRIS adalah sistem Human Resource Information System untuk mengelola seluruh aspek SDM dari data karyawan, payroll, attendance, hingga performance management.' },
      { question: 'Apakah sudah sesuai regulasi Indonesia?', answer: 'Ya, Satellite HRIS sudah comply dengan UU Ketenagakerjaan dan peraturan pajak Indonesia, dengan update berkala mengikuti regulasi terbaru.' },
      { question: 'Bagaimana dengan keamanan data karyawan?', answer: 'Data karyawan dienkripsi dan disimpan dengan standar keamanan tinggi, dilengkapi access control berdasarkan role.' },
      { question: 'Apakah bisa integrasi dengan mesin absensi?', answer: 'Ya, Satellite HRIS dapat diintegrasikan dengan berbagai merk mesin absensi fingerprint, face recognition, dan sistem lainnya.' },
      { question: 'Apakah karyawan bisa akses sendiri?', answer: 'Ya, tersedia employee self-service portal dan mobile app untuk akses slip gaji, pengajuan cuti, dan informasi HR lainnya.' },
    ],
    relatedProducts: ['satellite-erp', 'satellite-project', 'satellite-accounting'],
  },
  {
    slug: 'satellite-project',
    name: 'Satellite Project',
    shortName: 'Project',
    icon: '🟣',
    color: 'bg-purple-100 text-purple-600',
    tagline: 'Software manajemen proyek',
    description: 'Platform manajemen proyek untuk tim yang ingin bekerja lebih produktif. Kolaborasi real-time, tracking progress, dan resource management dalam satu tempat.',
    benefits: [
      'Visibilitas penuh progress setiap proyek',
      'Kolaborasi tim real-time tanpa hambatan',
      'Resource allocation yang optimal',
      'Deadline tracking dan reminder otomatis',
    ],
    features: [
      { icon: '📋', title: 'Project Planning', description: 'Rencanakan proyek dengan detail', bullets: ['Gantt Charts', 'Task Dependencies', 'Milestones', 'Project Templates'] },
      { icon: '✅', title: 'Task Management', description: 'Kelola tugas dengan efisien', bullets: ['Task Assignment', 'Subtasks', 'Priority Levels', 'Due Dates'] },
      { icon: '👥', title: 'Team Collaboration', description: 'Kerja tim lebih baik', bullets: ['Comments & Mentions', 'File Sharing', 'Activity Feed', 'Team Chat'] },
      { icon: '⏰', title: 'Time Tracking', description: 'Lacak waktu kerja', bullets: ['Time Logs', 'Timesheets', 'Billable Hours', 'Time Reports'] },
      { icon: '📊', title: 'Resource Management', description: 'Alokasi sumber daya optimal', bullets: ['Workload View', 'Capacity Planning', 'Resource Calendar', 'Utilization Reports'] },
      { icon: '📈', title: 'Reporting & Analytics', description: 'Insight proyek mendalam', bullets: ['Project Dashboard', 'Progress Reports', 'Budget Tracking', 'Custom Reports'] },
    ],
    steps: [
      { number: 1, title: 'Konsultasi Kebutuhan', description: 'Pahami workflow dan metodologi project management Anda' },
      { number: 2, title: 'Customization & Setup', description: 'Konfigurasi workspace, templates, dan workflow yang sesuai' },
      { number: 3, title: 'Training & Implementation', description: 'Pelatihan tim project manager dan anggota tim' },
      { number: 4, title: 'Go Live & Support', description: 'Migrasi proyek existing dan pendampingan operasional' },
    ],
    productBenefits: [
      { icon: '🎯', title: 'On-time Delivery Rate Meningkat 40%', description: 'Tracking progress dan deadline reminder memastikan proyek tepat waktu.' },
      { icon: '👁️', title: 'Transparansi Penuh untuk Stakeholder', description: 'Dashboard dan reporting memudahkan update status ke stakeholder.' },
      { icon: '⚡', title: 'Produktivitas Tim Meningkat', description: 'Kolaborasi yang efisien dan eliminasi bottleneck dalam workflow.' },
      { icon: '💰', title: 'Budget Control Lebih Baik', description: 'Time tracking dan budget monitoring mencegah cost overrun.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Rp 1.5 Juta', description: 'Untuk tim kecil', features: ['10 User', '5 Projects', 'Basic Features', 'Email Support'], popular: false },
      { name: 'Business', price: 'Rp 5 Juta', description: 'Untuk tim berkembang', features: ['30 User', 'Unlimited Projects', 'All Features', 'Priority Support', 'Time Tracking'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: 'Untuk organisasi besar', features: ['Unlimited User', 'Unlimited Projects', 'Advanced Security', '24/7 Support', 'Custom Integration'], popular: false },
    ],
    faqs: [
      { question: 'Apa itu Satellite Project?', answer: 'Satellite Project adalah platform manajemen proyek untuk merencanakan, melacak, dan berkolaborasi dalam proyek tim dengan lebih efektif.' },
      { question: 'Metodologi apa yang didukung?', answer: 'Satellite Project fleksibel dan mendukung berbagai metodologi seperti Waterfall, Agile, Scrum, Kanban, dan hybrid sesuai kebutuhan tim Anda.' },
      { question: 'Apakah ada mobile app?', answer: 'Ya, tersedia aplikasi mobile untuk iOS dan Android sehingga tim bisa update dan tracking proyek dari mana saja.' },
      { question: 'Bagaimana dengan integrasi tools lain?', answer: 'Satellite Project terintegrasi dengan Slack, Microsoft Teams, Google Workspace, dan berbagai tools produktivitas lainnya.' },
      { question: 'Apakah ada fitur untuk client collaboration?', answer: 'Ya, Anda bisa invite client sebagai guest dengan akses terbatas untuk melihat progress dan memberikan feedback.' },
    ],
    relatedProducts: ['satellite-hris', 'satellite-cloud', 'satellite-consulting'],
  },
  {
    slug: 'satellite-inventory',
    name: 'Satellite Inventory',
    shortName: 'Inventory',
    icon: '🟠',
    color: 'bg-orange-100 text-orange-600',
    tagline: 'Software manajemen inventori & gudang',
    description: 'Sistem inventory management untuk kontrol stok yang akurat dan efisien. Dari warehouse hingga multi-location, kelola inventori dengan mudah.',
    benefits: [
      'Real-time stock visibility di semua lokasi',
      'Automasi reorder point dan purchase order',
      'Barcode & QR code scanning support',
      'Multi-warehouse management dalam satu sistem',
    ],
    features: [
      { icon: '📦', title: 'Stock Management', description: 'Kelola stok dengan akurat', bullets: ['Real-time Stock Levels', 'Stock Transfers', 'Stock Adjustments', 'Stock Valuation'] },
      { icon: '🏭', title: 'Warehouse Management', description: 'Operasi gudang efisien', bullets: ['Multiple Warehouses', 'Bin Locations', 'Pick & Pack', 'Receiving & Putaway'] },
      { icon: '📋', title: 'Purchase Management', description: 'Pengadaan terintegrasi', bullets: ['Purchase Orders', 'Supplier Management', 'Reorder Points', 'Purchase Analytics'] },
      { icon: '📊', title: 'Inventory Analytics', description: 'Insight stok mendalam', bullets: ['Stock Reports', 'Movement History', 'Aging Analysis', 'ABC Analysis'] },
      { icon: '📱', title: 'Barcode & Mobile', description: 'Operasi cepat dan akurat', bullets: ['Barcode Scanning', 'Mobile App', 'Label Printing', 'Batch Tracking'] },
      { icon: '🔗', title: 'Integrations', description: 'Terhubung dengan sistem lain', bullets: ['E-commerce Sync', 'Accounting Integration', 'POS Integration', 'API Access'] },
    ],
    steps: [
      { number: 1, title: 'Konsultasi Kebutuhan', description: 'Analisis proses inventory dan warehouse Anda saat ini' },
      { number: 2, title: 'Customization & Setup', description: 'Konfigurasi warehouse, items, dan workflow yang sesuai' },
      { number: 3, title: 'Training & Implementation', description: 'Pelatihan tim warehouse dan stock keeper' },
      { number: 4, title: 'Go Live & Support', description: 'Stock opname awal dan pendampingan operasional' },
    ],
    productBenefits: [
      { icon: '📉', title: 'Kurangi Stockout hingga 80%', description: 'Reorder point otomatis dan real-time visibility mencegah kehabisan stok.' },
      { icon: '💰', title: 'Hemat Biaya Penyimpanan', description: 'Optimasi stok level mengurangi dead stock dan carrying cost.' },
      { icon: '⚡', title: 'Proses Picking 50% Lebih Cepat', description: 'Barcode scanning dan bin location mempercepat operasi gudang.' },
      { icon: '📊', title: 'Akurasi Stok 99%+', description: 'Eliminasi human error dengan sistem digital terintegrasi.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Rp 2 Juta', description: '1 Warehouse', features: ['1 Warehouse', '1000 SKUs', 'Basic Features', 'Email Support'], popular: false },
      { name: 'Business', price: 'Rp 7 Juta', description: 'Multi Warehouse', features: ['5 Warehouses', 'Unlimited SKUs', 'All Features', 'Mobile App', 'Priority Support'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: 'Large Scale', features: ['Unlimited Warehouses', 'Unlimited SKUs', 'Advanced Analytics', '24/7 Support', 'Custom Dev'], popular: false },
    ],
    faqs: [
      { question: 'Apa itu Satellite Inventory?', answer: 'Satellite Inventory adalah sistem manajemen inventori dan gudang untuk tracking stok real-time, pengelolaan multi-warehouse, dan optimasi operasi gudang.' },
      { question: 'Apakah support barcode scanner?', answer: 'Ya, Satellite Inventory mendukung berbagai jenis barcode dan QR code scanner, serta bisa generate dan print label barcode.' },
      { question: 'Bisa untuk multi-cabang?', answer: 'Ya, sistem mendukung multiple warehouse dan location, dengan kemampuan transfer antar gudang dan consolidated reporting.' },
      { question: 'Apakah terintegrasi dengan e-commerce?', answer: 'Ya, Satellite Inventory terintegrasi dengan Shopee, Tokopedia, Lazada, dan platform e-commerce lainnya untuk sync stok otomatis.' },
      { question: 'Bagaimana dengan expired date tracking?', answer: 'Tersedia fitur batch tracking dan expiry date management untuk produk dengan masa kadaluarsa.' },
    ],
    relatedProducts: ['satellite-pos', 'satellite-ecommerce', 'satellite-erp'],
  },
  {
    slug: 'satellite-accounting',
    name: 'Satellite Accounting',
    shortName: 'Accounting',
    icon: '🔵',
    color: 'bg-sky-100 text-sky-600',
    tagline: 'Software akuntansi & keuangan',
    description: 'Software akuntansi modern untuk pembukuan yang akurat dan laporan keuangan yang compliance. Dari invoice hingga financial statements, semua terintegrasi.',
    benefits: [
      'Pembukuan otomatis dan akurat',
      'Laporan keuangan sesuai standar akuntansi Indonesia',
      'Invoice dan payment tracking terintegrasi',
      'Tax compliance dan e-faktur ready',
    ],
    features: [
      { icon: '📒', title: 'General Ledger', description: 'Pembukuan akurat', bullets: ['Chart of Accounts', 'Journal Entries', 'Trial Balance', 'Financial Statements'] },
      { icon: '📄', title: 'Invoicing & AR', description: 'Tagihan profesional', bullets: ['Invoice Generation', 'Payment Tracking', 'Aging Reports', 'Customer Statements'] },
      { icon: '💳', title: 'Bills & AP', description: 'Kelola hutang efisien', bullets: ['Bill Management', 'Payment Scheduling', 'Vendor Management', 'AP Aging'] },
      { icon: '🏦', title: 'Banking', description: 'Rekonsiliasi mudah', bullets: ['Bank Feeds', 'Reconciliation', 'Multi-currency', 'Cash Flow'] },
      { icon: '📊', title: 'Financial Reports', description: 'Laporan komprehensif', bullets: ['Income Statement', 'Balance Sheet', 'Cash Flow Statement', 'Custom Reports'] },
      { icon: '🧾', title: 'Tax Management', description: 'Pajak yang comply', bullets: ['Tax Calculation', 'E-faktur Integration', 'Tax Reports', 'SPT Preparation'] },
    ],
    steps: [
      { number: 1, title: 'Konsultasi Kebutuhan', description: 'Analisis struktur akuntansi dan kebutuhan pelaporan Anda' },
      { number: 2, title: 'Customization & Setup', description: 'Setup chart of accounts, tax, dan format laporan' },
      { number: 3, title: 'Training & Implementation', description: 'Pelatihan tim finance dan accounting' },
      { number: 4, title: 'Go Live & Support', description: 'Migrasi data historis dan pendampingan closing bulan pertama' },
    ],
    productBenefits: [
      { icon: '⏱️', title: 'Closing Bulanan 60% Lebih Cepat', description: 'Automasi dan integrasi data mempercepat proses tutup buku.' },
      { icon: '✅', title: 'Laporan Audit-ready', description: 'Standar akuntansi Indonesia dan trail audit yang lengkap.' },
      { icon: '🧾', title: 'Tax Compliance Terjamin', description: 'Kalkulasi pajak otomatis dan integrasi e-faktur DJP.' },
      { icon: '👁️', title: 'Real-time Financial Visibility', description: 'Dashboard keuangan real-time untuk pengambilan keputusan.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Rp 1.5 Juta', description: 'Untuk UKM', features: ['3 User', 'Basic Accounting', 'Invoice & Bills', 'Email Support'], popular: false },
      { name: 'Business', price: 'Rp 5 Juta', description: 'Untuk bisnis berkembang', features: ['10 User', 'Full Accounting', 'Multi-currency', 'Tax Management', 'Priority Support'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: 'Untuk korporasi', features: ['Unlimited User', 'Multi-company', 'Consolidation', '24/7 Support', 'Custom Reports'], popular: false },
    ],
    faqs: [
      { question: 'Apa itu Satellite Accounting?', answer: 'Satellite Accounting adalah software akuntansi untuk mengelola pembukuan, invoice, hutang piutang, dan laporan keuangan sesuai standar akuntansi Indonesia.' },
      { question: 'Apakah sesuai dengan PSAK?', answer: 'Ya, Satellite Accounting mengikuti Pernyataan Standar Akuntansi Keuangan (PSAK) Indonesia dan dapat disesuaikan dengan kebutuhan pelaporan Anda.' },
      { question: 'Apakah sudah terintegrasi e-faktur?', answer: 'Ya, tersedia integrasi dengan sistem e-faktur DJP untuk pembuatan dan pelaporan faktur pajak.' },
      { question: 'Bisa untuk multi-company?', answer: 'Ya, paket Enterprise mendukung pengelolaan multi-company dengan konsolidasi laporan keuangan.' },
      { question: 'Bagaimana dengan keamanan data keuangan?', answer: 'Data keuangan dienkripsi dengan standar banking-grade security, dengan backup otomatis dan audit trail lengkap.' },
    ],
    relatedProducts: ['satellite-erp', 'satellite-inventory', 'satellite-pos'],
  },
  {
    slug: 'satellite-pos',
    name: 'Satellite POS',
    shortName: 'POS',
    icon: '🟡',
    color: 'bg-yellow-100 text-yellow-600',
    tagline: 'Software kasir & point of sale',
    description: 'Sistem POS modern untuk retail dan F&B. Transaksi cepat, inventory sync, dan laporan penjualan real-time. Cocok untuk toko, restoran, dan cafe.',
    benefits: [
      'Transaksi kasir cepat dan mudah',
      'Multi payment method support',
      'Stok sinkron real-time dengan inventory',
      'Laporan penjualan harian, mingguan, bulanan',
    ],
    features: [
      { icon: '🛒', title: 'Sales Transaction', description: 'Transaksi cepat dan akurat', bullets: ['Quick Checkout', 'Product Search', 'Discount & Promo', 'Split Payment'] },
      { icon: '💳', title: 'Payment Options', description: 'Berbagai metode bayar', bullets: ['Cash', 'Card Payment', 'E-wallet', 'QRIS'] },
      { icon: '📦', title: 'Inventory Sync', description: 'Stok selalu update', bullets: ['Real-time Stock', 'Low Stock Alert', 'Stock Transfer', 'Stock Opname'] },
      { icon: '👥', title: 'Customer & Loyalty', description: 'Kelola pelanggan', bullets: ['Customer Database', 'Loyalty Points', 'Member Discount', 'Purchase History'] },
      { icon: '📊', title: 'Sales Reports', description: 'Analisis penjualan', bullets: ['Daily Reports', 'Best Sellers', 'Sales by Category', 'Cashier Performance'] },
      { icon: '🖨️', title: 'Hardware Integration', description: 'Support berbagai perangkat', bullets: ['Receipt Printer', 'Cash Drawer', 'Barcode Scanner', 'Customer Display'] },
    ],
    steps: [
      { number: 1, title: 'Konsultasi Kebutuhan', description: 'Analisis kebutuhan POS dan hardware yang diperlukan' },
      { number: 2, title: 'Customization & Setup', description: 'Setup produk, kategori, payment methods, dan promo' },
      { number: 3, title: 'Training & Implementation', description: 'Pelatihan kasir dan supervisor' },
      { number: 4, title: 'Go Live & Support', description: 'Go live dan pendampingan operasional harian' },
    ],
    productBenefits: [
      { icon: '⚡', title: 'Checkout 40% Lebih Cepat', description: 'Interface intuitif dan barcode scanning mempercepat transaksi.' },
      { icon: '📊', title: 'Kontrol Bisnis Real-time', description: 'Pantau penjualan dari mana saja via dashboard dan mobile app.' },
      { icon: '🎯', title: 'Tingkatkan Repeat Customer', description: 'Program loyalty dan customer data untuk marketing targeted.' },
      { icon: '🔒', title: 'Keamanan Kasir Terjamin', description: 'Cash control dan audit trail mencegah kecurangan.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Rp 500 Ribu', description: '1 Outlet', features: ['1 Device', 'Basic POS', 'Daily Reports', 'Email Support'], popular: false },
      { name: 'Business', price: 'Rp 2 Juta', description: 'Multi Outlet', features: ['5 Devices', 'Full POS', 'Inventory Sync', 'Loyalty Program', 'Priority Support'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: 'Chain Store', features: ['Unlimited Devices', 'Multi-outlet', 'Central Management', '24/7 Support', 'Custom Dev'], popular: false },
    ],
    faqs: [
      { question: 'Apa itu Satellite POS?', answer: 'Satellite POS adalah sistem Point of Sale untuk mengelola transaksi kasir, inventory, dan laporan penjualan untuk bisnis retail dan F&B.' },
      { question: 'Bisa offline?', answer: 'Ya, Satellite POS bisa beroperasi offline dan akan sync otomatis saat koneksi internet tersedia kembali.' },
      { question: 'Hardware apa yang dibutuhkan?', answer: 'Bisa menggunakan tablet Android/iPad atau PC. Opsional: printer thermal, cash drawer, dan barcode scanner.' },
      { question: 'Apakah support QRIS?', answer: 'Ya, Satellite POS terintegrasi dengan QRIS dan berbagai e-wallet populer seperti GoPay, OVO, DANA.' },
      { question: 'Bisa untuk restoran?', answer: 'Ya, tersedia fitur khusus F&B seperti table management, kitchen display, dan modifier untuk custom order.' },
    ],
    relatedProducts: ['satellite-inventory', 'satellite-accounting', 'satellite-crm'],
  },
  {
    slug: 'satellite-ecommerce',
    name: 'Satellite E-Commerce',
    shortName: 'E-Commerce',
    icon: '🔴',
    color: 'bg-rose-100 text-rose-600',
    tagline: 'Platform toko online & marketplace',
    description: 'Platform e-commerce lengkap untuk membangun dan mengelola toko online Anda. Dari storefront hingga fulfillment, semua dalam satu sistem.',
    benefits: [
      'Toko online profesional tanpa coding',
      'Multi-channel selling ke marketplace',
      'Inventory sync otomatis',
      'Payment gateway terintegrasi',
    ],
    features: [
      { icon: '🏪', title: 'Online Store', description: 'Toko online profesional', bullets: ['Store Builder', 'Theme Customization', 'Mobile Responsive', 'SEO Optimized'] },
      { icon: '📦', title: 'Product Management', description: 'Kelola produk mudah', bullets: ['Product Catalog', 'Variants & Options', 'Digital Products', 'Bulk Upload'] },
      { icon: '🛒', title: 'Order Management', description: 'Kelola pesanan efisien', bullets: ['Order Processing', 'Shipping Integration', 'Return Management', 'Order Tracking'] },
      { icon: '💳', title: 'Payment Integration', description: 'Terima pembayaran mudah', bullets: ['Payment Gateway', 'Bank Transfer', 'COD', 'Installment'] },
      { icon: '🔗', title: 'Marketplace Sync', description: 'Jual di banyak channel', bullets: ['Shopee Integration', 'Tokopedia Integration', 'Lazada Integration', 'Centralized Inventory'] },
      { icon: '📊', title: 'E-commerce Analytics', description: 'Insight bisnis online', bullets: ['Sales Analytics', 'Customer Insights', 'Marketing ROI', 'Conversion Tracking'] },
    ],
    steps: [
      { number: 1, title: 'Konsultasi Kebutuhan', description: 'Diskusi strategi e-commerce dan kebutuhan bisnis online Anda' },
      { number: 2, title: 'Customization & Setup', description: 'Setup store, produk, payment, dan shipping methods' },
      { number: 3, title: 'Training & Implementation', description: 'Pelatihan tim e-commerce untuk operasional' },
      { number: 4, title: 'Go Live & Support', description: 'Launch toko dan pendampingan growth' },
    ],
    productBenefits: [
      { icon: '🌐', title: 'Jangkau Pelanggan Lebih Luas', description: 'Toko online 24/7 memperluas jangkauan pasar Anda.' },
      { icon: '📈', title: 'Multi-channel Revenue', description: 'Jual di website sendiri dan marketplace dari satu dashboard.' },
      { icon: '⏱️', title: 'Operasional Efisien', description: 'Automasi order processing dan inventory sync.' },
      { icon: '📊', title: 'Data-driven Marketing', description: 'Customer insights untuk strategi marketing yang tepat.' },
    ],
    pricing: [
      { name: 'Starter', price: 'Rp 1 Juta', description: 'Untuk pemula', features: ['Online Store', '100 Products', 'Basic Theme', 'Email Support'], popular: false },
      { name: 'Business', price: 'Rp 5 Juta', description: 'Untuk bisnis serius', features: ['Online Store', 'Unlimited Products', 'Marketplace Sync', 'Analytics', 'Priority Support'], popular: true },
      { name: 'Enterprise', price: 'Custom', description: 'Untuk brand besar', features: ['Custom Store', 'Unlimited Everything', 'Custom Integration', '24/7 Support', 'Dedicated Manager'], popular: false },
    ],
    faqs: [
      { question: 'Apa itu Satellite E-Commerce?', answer: 'Satellite E-Commerce adalah platform untuk membangun toko online profesional dan mengelola penjualan multi-channel dari satu dashboard.' },
      { question: 'Apakah perlu kemampuan coding?', answer: 'Tidak perlu! Satellite E-Commerce menyediakan store builder drag-and-drop yang mudah digunakan siapa saja.' },
      { question: 'Payment gateway apa yang didukung?', answer: 'Terintegrasi dengan Midtrans, Xendit, Doku, dan berbagai bank untuk transfer dan virtual account.' },
      { question: 'Bagaimana dengan shipping?', answer: 'Terintegrasi dengan JNE, J&T, SiCepat, dan kurir lainnya dengan perhitungan ongkir otomatis.' },
      { question: 'Bisa sync dengan Shopee dan Tokopedia?', answer: 'Ya, Satellite E-Commerce bisa sync produk, stok, dan pesanan dengan Shopee, Tokopedia, Lazada secara otomatis.' },
    ],
    relatedProducts: ['satellite-inventory', 'satellite-pos', 'satellite-crm'],
  },
  {
    slug: 'satellite-mobile',
    name: 'Satellite Mobile',
    shortName: 'Mobile',
    icon: '🟢',
    color: 'bg-emerald-100 text-emerald-600',
    tagline: 'Pengembangan aplikasi mobile',
    description: 'Layanan pengembangan aplikasi mobile untuk iOS dan Android. Dari konsep hingga launch di App Store dan Play Store dengan tim developer berpengalaman.',
    benefits: [
      'Native dan cross-platform development',
      'UI/UX design yang user-friendly',
      'Publish ke App Store dan Play Store',
      'Maintenance dan update berkelanjutan',
    ],
    features: [
      { icon: '📱', title: 'Mobile App Development', description: 'Aplikasi berkualitas tinggi', bullets: ['iOS Development', 'Android Development', 'Cross-platform (React Native/Flutter)', 'Native Performance'] },
      { icon: '🎨', title: 'UI/UX Design', description: 'Design yang memukau', bullets: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping'] },
      { icon: '🔧', title: 'Backend Development', description: 'Backend yang solid', bullets: ['API Development', 'Database Design', 'Cloud Infrastructure', 'Security'] },
      { icon: '🧪', title: 'Quality Assurance', description: 'Testing komprehensif', bullets: ['Manual Testing', 'Automated Testing', 'Performance Testing', 'Security Audit'] },
      { icon: '🚀', title: 'App Store Launch', description: 'Publish ke store', bullets: ['App Store Submission', 'Play Store Submission', 'ASO Optimization', 'Launch Strategy'] },
      { icon: '🔄', title: 'Maintenance & Support', description: 'Dukungan berkelanjutan', bullets: ['Bug Fixes', 'OS Updates', 'Feature Updates', 'Performance Optimization'] },
    ],
    steps: [
      { number: 1, title: 'Discovery & Planning', description: 'Analisis kebutuhan, target user, dan scope aplikasi' },
      { number: 2, title: 'Design & Prototype', description: 'UI/UX design dan interactive prototype untuk validasi' },
      { number: 3, title: 'Development & Testing', description: 'Coding dengan metodologi Agile dan QA testing' },
      { number: 4, title: 'Launch & Support', description: 'Publish ke store dan maintenance berkelanjutan' },
    ],
    productBenefits: [
      { icon: '📱', title: 'Jangkau Pengguna Mobile', description: 'Akses pelanggan di smartphone mereka 24/7.' },
      { icon: '⭐', title: 'User Experience Premium', description: 'Design dan performance yang memberikan pengalaman terbaik.' },
      { icon: '🔒', title: 'Keamanan Terjamin', description: 'Security best practices untuk melindungi data user.' },
      { icon: '📈', title: 'Skalabel untuk Pertumbuhan', description: 'Arsitektur yang siap scale seiring pertumbuhan bisnis.' },
    ],
    pricing: [
      { name: 'Starter App', price: 'Rp 50 Juta', description: 'Aplikasi sederhana', features: ['Single Platform', 'Basic Features', '2-3 Months', '3 Months Support'], popular: false },
      { name: 'Business App', price: 'Rp 150 Juta', description: 'Aplikasi kompleks', features: ['iOS + Android', 'Advanced Features', 'Backend API', '6 Months Support'], popular: true },
      { name: 'Enterprise App', price: 'Custom', description: 'Aplikasi enterprise', features: ['Full Custom', 'Complex Integration', 'Dedicated Team', 'Ongoing Support'], popular: false },
    ],
    faqs: [
      { question: 'Berapa lama waktu pengembangan?', answer: 'Tergantung kompleksitas, umumnya 2-6 bulan untuk aplikasi dengan fitur standar, bisa lebih untuk aplikasi enterprise.' },
      { question: 'Native atau cross-platform?', answer: 'Kami menyediakan keduanya. Native (Swift/Kotlin) untuk performa maksimal, atau cross-platform (React Native/Flutter) untuk efisiensi biaya.' },
      { question: 'Apakah termasuk backend?', answer: 'Ya, kami menyediakan end-to-end development termasuk backend, API, dan cloud infrastructure.' },
      { question: 'Bagaimana dengan maintenance?', answer: 'Kami menyediakan paket maintenance bulanan untuk bug fixes, OS updates, dan minor enhancements.' },
      { question: 'Siapa yang akan memiliki source code?', answer: 'Anda akan memiliki full ownership source code aplikasi setelah project selesai.' },
    ],
    relatedProducts: ['satellite-cloud', 'satellite-consulting', 'satellite-security'],
  },
  {
    slug: 'satellite-cloud',
    name: 'Satellite Cloud',
    shortName: 'Cloud',
    icon: '🔵',
    color: 'bg-cyan-100 text-cyan-600',
    tagline: 'Solusi cloud infrastructure',
    description: 'Layanan cloud computing untuk migrasi, implementasi, dan optimasi infrastructure bisnis Anda. Skalabilitas, keamanan, dan efisiensi dengan AWS, GCP, dan Azure.',
    benefits: [
      'Migrasi cloud yang smooth dan aman',
      'Infrastructure as Code untuk konsistensi',
      'Cost optimization untuk efisiensi budget',
      'Monitoring dan alerting 24/7',
    ],
    features: [
      { icon: '☁️', title: 'Cloud Migration', description: 'Migrasi aman ke cloud', bullets: ['Assessment & Planning', 'Lift & Shift', 'Re-platforming', 'Zero Downtime Migration'] },
      { icon: '🏗️', title: 'Infrastructure Design', description: 'Arsitektur cloud optimal', bullets: ['Architecture Design', 'High Availability', 'Disaster Recovery', 'Auto Scaling'] },
      { icon: '🔧', title: 'DevOps Implementation', description: 'CI/CD dan automation', bullets: ['CI/CD Pipelines', 'Infrastructure as Code', 'Container Orchestration', 'GitOps'] },
      { icon: '📊', title: 'Monitoring & Observability', description: 'Pantau kesehatan sistem', bullets: ['24/7 Monitoring', 'Log Management', 'APM', 'Alerting'] },
      { icon: '🔒', title: 'Cloud Security', description: 'Keamanan cloud yang kuat', bullets: ['Security Assessment', 'Compliance', 'Identity Management', 'Network Security'] },
      { icon: '💰', title: 'Cost Optimization', description: 'Efisiensi biaya cloud', bullets: ['Cost Analysis', 'Right-sizing', 'Reserved Instances', 'Spot Instances'] },
    ],
    steps: [
      { number: 1, title: 'Assessment', description: 'Analisis infrastruktur existing dan kebutuhan cloud Anda' },
      { number: 2, title: 'Design & Planning', description: 'Desain arsitektur cloud dan migration roadmap' },
      { number: 3, title: 'Implementation', description: 'Implementasi infrastructure dan migrasi workload' },
      { number: 4, title: 'Optimization & Support', description: 'Optimasi performa dan biaya dengan monitoring berkelanjutan' },
    ],
    productBenefits: [
      { icon: '📈', title: 'Skalabilitas Tanpa Batas', description: 'Scale up atau down sesuai demand bisnis secara instant.' },
      { icon: '💰', title: 'Hemat hingga 40% Biaya IT', description: 'Eliminasi hardware investment dan bayar sesuai penggunaan.' },
      { icon: '⚡', title: 'Availability 99.9%+', description: 'High availability dan disaster recovery untuk bisnis yang selalu online.' },
      { icon: '🔒', title: 'Security Grade Enterprise', description: 'Compliance dan security best practices dari cloud providers.' },
    ],
    pricing: [
      { name: 'Cloud Start', price: 'Rp 10 Juta', description: 'Untuk startup', features: ['Basic Migration', 'Monitoring Setup', '3 Months Support', 'Basic Security'], popular: false },
      { name: 'Cloud Pro', price: 'Rp 50 Juta', description: 'Untuk SMB', features: ['Full Migration', 'CI/CD Setup', 'HA Architecture', '6 Months Support'], popular: true },
      { name: 'Cloud Enterprise', price: 'Custom', description: 'Untuk enterprise', features: ['Complex Migration', 'Multi-cloud', 'Dedicated SRE', 'Ongoing Support'], popular: false },
    ],
    faqs: [
      { question: 'Cloud provider apa yang didukung?', answer: 'Kami bekerja dengan AWS, Google Cloud Platform (GCP), dan Microsoft Azure, serta cloud lokal seperti Alibaba Cloud.' },
      { question: 'Berapa lama proses migrasi?', answer: 'Tergantung kompleksitas, umumnya 1-3 bulan untuk migrasi standar, bisa lebih untuk enterprise dengan banyak sistem.' },
      { question: 'Apakah akan ada downtime?', answer: 'Kami menerapkan strategi zero-downtime migration dengan cutover yang terencana di off-peak hours.' },
      { question: 'Bagaimana dengan compliance?', answer: 'Kami membantu memenuhi compliance seperti ISO 27001, PCI-DSS, HIPAA sesuai kebutuhan industri Anda.' },
      { question: 'Apakah termasuk managed services?', answer: 'Ya, kami menyediakan managed services untuk monitoring, maintenance, dan optimasi cloud infrastructure Anda.' },
    ],
    relatedProducts: ['satellite-security', 'satellite-mobile', 'satellite-consulting'],
  },
  {
    slug: 'satellite-security',
    name: 'Satellite Security',
    shortName: 'Security',
    icon: '🟣',
    color: 'bg-violet-100 text-violet-600',
    tagline: 'Keamanan & cybersecurity',
    description: 'Layanan keamanan siber komprehensif untuk melindungi bisnis Anda dari ancaman digital. Dari assessment hingga monitoring, keamanan yang proaktif.',
    benefits: [
      'Security assessment dan vulnerability scanning',
      'Penetration testing untuk identifikasi kelemahan',
      'Security monitoring 24/7',
      'Incident response dan recovery',
    ],
    features: [
      { icon: '🔍', title: 'Security Assessment', description: 'Evaluasi keamanan menyeluruh', bullets: ['Vulnerability Assessment', 'Risk Analysis', 'Compliance Audit', 'Security Roadmap'] },
      { icon: '🎯', title: 'Penetration Testing', description: 'Uji keamanan sistem', bullets: ['Web App Pentest', 'Mobile App Pentest', 'Network Pentest', 'Social Engineering'] },
      { icon: '🛡️', title: 'Security Implementation', description: 'Implementasi keamanan', bullets: ['Firewall Setup', 'Endpoint Protection', 'Email Security', 'Access Control'] },
      { icon: '👁️', title: 'Security Monitoring', description: 'Pantau ancaman 24/7', bullets: ['SIEM', 'Threat Detection', 'Incident Alerting', 'Log Analysis'] },
      { icon: '🚨', title: 'Incident Response', description: 'Respons cepat insiden', bullets: ['Incident Handling', 'Forensic Analysis', 'Recovery Support', 'Post-incident Review'] },
      { icon: '📚', title: 'Security Awareness', description: 'Edukasi keamanan', bullets: ['Security Training', 'Phishing Simulation', 'Policy Development', 'Best Practices'] },
    ],
    steps: [
      { number: 1, title: 'Security Assessment', description: 'Evaluasi postur keamanan dan identifikasi risiko' },
      { number: 2, title: 'Strategy & Planning', description: 'Develop security roadmap dan prioritas perbaikan' },
      { number: 3, title: 'Implementation', description: 'Implementasi solusi keamanan sesuai roadmap' },
      { number: 4, title: 'Monitoring & Response', description: 'Monitoring berkelanjutan dan incident response' },
    ],
    productBenefits: [
      { icon: '🛡️', title: 'Proteksi dari Cyber Threats', description: 'Lindungi bisnis dari ransomware, phishing, dan ancaman siber lainnya.' },
      { icon: '✅', title: 'Compliance Terjamin', description: 'Penuhi regulasi keamanan data seperti UU PDP, ISO 27001, PCI-DSS.' },
      { icon: '💼', title: 'Jaga Reputasi Bisnis', description: 'Cegah data breach yang bisa merusak kepercayaan pelanggan.' },
      { icon: '⚡', title: 'Respons Cepat Insiden', description: 'Tim incident response siap 24/7 untuk menangani security incident.' },
    ],
    pricing: [
      { name: 'Security Check', price: 'Rp 15 Juta', description: 'Assessment sekali', features: ['Vulnerability Scan', 'Risk Report', 'Recommendations', 'One-time'], popular: false },
      { name: 'Security Pro', price: 'Rp 10 Juta/bulan', description: 'Monitoring rutin', features: ['Monthly Scanning', '24/7 Monitoring', 'Incident Response', 'Quarterly Reports'], popular: true },
      { name: 'Security Enterprise', price: 'Custom', description: 'Full service', features: ['Pentest', 'SIEM', 'Dedicated Analyst', 'Compliance Support'], popular: false },
    ],
    faqs: [
      { question: 'Apa saja yang dicek dalam security assessment?', answer: 'Kami melakukan vulnerability scanning, configuration review, access control audit, dan compliance check terhadap standar keamanan.' },
      { question: 'Berapa sering harus melakukan penetration testing?', answer: 'Kami merekomendasikan minimal setahun sekali, atau setiap ada perubahan signifikan pada sistem dan aplikasi.' },
      { question: 'Apakah ada jaminan tidak akan di-hack?', answer: 'Tidak ada sistem yang 100% aman, tapi kami membantu meminimalkan risiko dan mempersiapkan respons jika terjadi insiden.' },
      { question: 'Bagaimana dengan UU PDP?', answer: 'Kami membantu Anda memenuhi Undang-Undang Pelindungan Data Pribadi termasuk assessment dan implementasi kontrol yang diperlukan.' },
      { question: 'Apakah tim internal perlu training?', answer: 'Sangat direkomendasikan. Human factor adalah titik lemah terbesar, kami menyediakan security awareness training untuk karyawan.' },
    ],
    relatedProducts: ['satellite-cloud', 'satellite-consulting', 'satellite-erp'],
  },
  {
    slug: 'satellite-consulting',
    name: 'Satellite Consulting',
    shortName: 'Consulting',
    icon: '🟠',
    color: 'bg-amber-100 text-amber-600',
    tagline: 'Konsultasi IT & digital transformation',
    description: 'Layanan konsultasi strategis untuk transformasi digital bisnis Anda. Dari roadmap teknologi hingga implementasi, kami guide perjalanan digital Anda.',
    benefits: [
      'IT strategy yang align dengan business goals',
      'Digital transformation roadmap yang jelas',
      'Vendor selection dan project management',
      'Change management untuk adopsi sukses',
    ],
    features: [
      { icon: '🎯', title: 'IT Strategy', description: 'Strategi IT yang tepat', bullets: ['IT Assessment', 'Strategy Development', 'Technology Roadmap', 'Budget Planning'] },
      { icon: '🔄', title: 'Digital Transformation', description: 'Transformasi digital sukses', bullets: ['Process Analysis', 'Digitization Strategy', 'Tool Selection', 'Implementation Plan'] },
      { icon: '📊', title: 'Business Analysis', description: 'Analisis kebutuhan bisnis', bullets: ['Requirement Gathering', 'Process Mapping', 'Gap Analysis', 'Solution Design'] },
      { icon: '🏗️', title: 'Solution Architecture', description: 'Arsitektur sistem optimal', bullets: ['Architecture Design', 'Technology Selection', 'Integration Planning', 'Scalability Design'] },
      { icon: '📋', title: 'Project Management', description: 'Kelola proyek IT sukses', bullets: ['Project Planning', 'Vendor Management', 'Quality Assurance', 'Risk Management'] },
      { icon: '🔄', title: 'Change Management', description: 'Adopsi yang sukses', bullets: ['Stakeholder Management', 'Training Programs', 'Communication Plan', 'Adoption Metrics'] },
    ],
    steps: [
      { number: 1, title: 'Discovery', description: 'Pahami bisnis, challenges, dan goals transformasi digital Anda' },
      { number: 2, title: 'Assessment & Strategy', description: 'Analisis current state dan develop transformation strategy' },
      { number: 3, title: 'Roadmap & Planning', description: 'Detail roadmap dengan timeline, budget, dan milestones' },
      { number: 4, title: 'Implementation Support', description: 'Pendampingan eksekusi dan change management' },
    ],
    productBenefits: [
      { icon: '🎯', title: 'IT Align dengan Business', description: 'Technology investments yang mendukung pencapaian business goals.' },
      { icon: '💰', title: 'Optimasi IT Investment', description: 'ROI maksimal dari investasi teknologi dengan prioritas yang tepat.' },
      { icon: '⚡', title: 'Percepat Transformasi', description: 'Roadmap yang jelas mempercepat journey transformasi digital.' },
      { icon: '🛡️', title: 'Mitigasi Risiko Proyek', description: 'Best practices dan experienced guidance mengurangi risiko kegagalan.' },
    ],
    pricing: [
      { name: 'Advisory', price: 'Rp 25 Juta', description: 'Konsultasi strategis', features: ['IT Assessment', 'Strategy Recommendation', 'Roadmap Overview', '2 Sessions'], popular: false },
      { name: 'Transformation', price: 'Rp 100 Juta', description: 'Program transformasi', features: ['Full Assessment', 'Detailed Roadmap', 'Vendor Selection', '6 Months Support'], popular: true },
      { name: 'Partnership', price: 'Custom', description: 'Long-term partnership', features: ['CIO-as-a-Service', 'Ongoing Advisory', 'Implementation Support', 'Dedicated Consultant'], popular: false },
    ],
    faqs: [
      { question: 'Apa bedanya dengan hiring internal IT consultant?', answer: 'Kami membawa pengalaman dari berbagai industri dan proyek, objektif, dan focused pada hasil tanpa bias internal politik.' },
      { question: 'Berapa lama engagement consulting?', answer: 'Bervariasi dari project-based (2-6 bulan) hingga ongoing retainer untuk advisory berkelanjutan.' },
      { question: 'Apakah membantu implementasi juga?', answer: 'Ya, kami bisa assist dalam implementasi, project management, dan vendor coordination jika dibutuhkan.' },
      { question: 'Industri apa yang di-handle?', answer: 'Kami memiliki pengalaman di berbagai industri: manufacturing, retail, financial services, healthcare, dan lainnya.' },
      { question: 'Bagaimana dengan confidentiality?', answer: 'Kami menandatangani NDA dan sangat menjaga kerahasiaan informasi bisnis klien.' },
    ],
    relatedProducts: ['satellite-cloud', 'satellite-security', 'satellite-erp'],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getRelatedProducts = (slugs: string[]): Product[] => {
  return products.filter((p) => slugs.includes(p.slug));
};
