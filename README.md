# Invoice Management Dashboard

A modern, full-featured invoice management system built with Next.js 16, React 19, and TypeScript. Track revenue, manage clients, create invoices, and monitor payments with a beautiful, responsive interface.

## Features

- **Dashboard Overview**: Real-time statistics including total revenue, pending amounts, total invoices, and active clients
- **Invoice Management**: Create, view, and manage invoices with an intuitive interface
- **Client Management**: Maintain a database of your clients with detailed information
- **Payment Tracking**: Monitor payment status and history for all invoices
- **Revenue Analytics**: Visual charts showing revenue trends and invoice status distribution
- **Settings**: Customize your business profile and application preferences
- **Dark/Light Mode**: Built-in theme switching for comfortable viewing
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **React**: Version 19.2 with the latest features
- **TypeScript**: Full type safety throughout the application
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/)
- **Charts**: [Recharts](https://recharts.org/) for data visualization
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes) for theme management

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended), npm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd softwaredevelopmentoptions
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
├── app/
│   ├── dashboard/          # Dashboard pages and layouts
│   │   ├── clients/        # Client management
│   │   ├── invoices/       # Invoice management
│   │   ├── payments/       # Payment tracking
│   │   └── settings/       # Application settings
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page (redirects to dashboard)
├── components/
│   ├── clients/            # Client-related components
│   ├── dashboard/          # Dashboard-specific components
│   ├── invoices/           # Invoice-related components
│   ├── layout/             # Layout components (header, sidebar)
│   ├── payments/           # Payment-related components
│   ├── settings/           # Settings components
│   └── ui/                 # Reusable UI components (shadcn/ui)
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
└── public/                 # Static assets
```

## Available Scripts

- `pnpm dev` - Start the development server
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

## Key Features Explained

### Dashboard
The main dashboard provides an at-a-glance view of your business metrics including revenue charts, invoice status distribution, and recent invoice activity.

### Invoice Management
Create professional invoices with customizable fields, track their status (draft, sent, paid, overdue), and manage all your billing in one place.

### Client Management
Maintain detailed client records to streamline invoice creation and track client-specific metrics.

### Payment Tracking
Monitor which invoices have been paid, which are pending, and stay on top of your cash flow.

## Customization

### Theming
The application supports light and dark themes. Theme configuration can be customized in `app/globals.css` using CSS variables for colors, spacing, and typography.

### UI Components
All UI components are built with [shadcn/ui](https://ui.shadcn.com/) and can be easily customized by modifying the files in the `components/ui/` directory.

## Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/your-repo)

### Other Platforms

This Next.js application can be deployed to any platform that supports Node.js:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Self-hosted with Node.js

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
