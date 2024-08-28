import Link from 'next/link';
import { getPages } from '@/utils/integrations-loader';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/components/ui/button';
import { Pills } from '@/components/ui/pills';


export default function Page(): React.ReactElement {
    const integrationsList = [...getPages()]

    const groupedIntegrations: { [key: string]: any[] } = integrationsList.reduce((acc: { [key: string]: any[] }, integration) => {
        const category = integration.data.category;
        if (integration.data.title === 'README') {
            return acc;
        }
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(integration);
        
        return acc;
    }
        , {});

    const firstCategory = Object.keys(groupedIntegrations).sort()[0];

    return (
        <main className="py-12 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto w-full flex flex-col items-center lg:mx-0">
                    <h1 className="mb-6 text-center text-4xl font-semibold md:text-5xl">Find an Integration</h1>
                    <p className="mb-6 h-fit text-center p-2 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
                        Discover best-in-class intergrations for your Avalanche L1 and learn how to use them.
                    </p>
                    <div className='inline-flex items-center gap-3'>
                        <Link className={cn(buttonVariants())} href={`#${firstCategory}`}>Discover Integrations</Link>
                        <Link className={cn(buttonVariants({ variant: 'outline' }))} href="https://github.com/ava-labs/avalanche-docs/blob/master/content/integrations" target='_blank'>Add your Integration</Link>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-12">
                    <div className="w-full mb-12 md:w-1/5">
                        <div className="sticky top-0 pt-20">
                            {/**<div className="inline-flex items-center gap-2 rounded-full border bg-secondary/50 p-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground w-full mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search ms-1 size-4"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
                                <input type="text" placeholder="Search" className="w-full bg-transparent focus:outline-none" />
                            </div>**/}
                            <ul className="space-y-2">
                                {/* Render the categories on sidelist */}
                                {Object.keys(groupedIntegrations)
                                    .sort()
                                    .map((category) => (
                                        <li key={category} className='w-full'>
                                            <a href={`#${category}`} className="block w-full text-md leading-6 mb-4 rounded-md ring-1 ring-slate-900/10 dark:ring-slate-500 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
                                                {category}
                                            </a>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-4/5">

                        {/* Render the integrations for each category */}
                        {Object.entries(groupedIntegrations).sort().map(([category, integrations]) => (
                            <div key={category}>
                                <section id={category}>
                                    <h2 className="text-2xl mb-8 pt-20">{category}</h2>
                                </section>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-full">
                                    {integrations.map((integration) => (
                                        <Link
                                            key={integration.url}
                                            href={integration.url}
                                            className="flex flex-col bg-card p-4 rounded-lg transition-shadow shadow hover:shadow-lg dark:bg-card-dark dark:border dark:border-slate-500 dark:hover:bg-slate-700 w-auto h-auto"
                                        >
                                            <div className="flex items-center mb-4">
                                                <div className="w-8 h-8 mr-2 rounded-full overflow-hidden">
                                                    <img
                                                        src={integration.data.logo}
                                                        alt={integration.data.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl">{integration.data.title}</h3>
                                                </div>
                                            </div>
                                            
                                            <p className="text-sm text-gray-500">{integration.data.description}</p>
                                            
                                            {integration.data.available && integration.data.available.length > 0 && <div className="flex content-center mt-4">
                                                <p className="text-sm text-gray-500 mr-3">Available For: </p>
                                                <Pills items={integration.data.available} />
                                            </div>}
                                            
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}