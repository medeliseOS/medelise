import type { Metadata } from 'next';
import { ApplicationJourney } from '@features/cariera/components';
import { getJobSlugs, getJobBySlug } from '@services/cariera.service';

type Props = {
    params: Promise<{ slug: string }>;
};

/* Pre-render all known job application pages at build time */
export async function generateStaticParams() {
    const slugs = await getJobSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const job = await getJobBySlug(slug);

    const title = job
        ? job.title
        : slug
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');

    return {
        title: `Aplică — ${title} · Carieră`,
        description: `Aplică online pentru poziția de ${title} la Medelise Health Solutions. Completează formularul de aplicare.`,
        openGraph: {
            title: `Aplică — ${title} · Carieră · Medelise`,
            description: `Aplică acum pentru ${title}. Alătură-te echipei Medelise.`,
        },
    };
}

export default async function ApplicationPage({ params }: Props) {
    const { slug } = await params;
    return <ApplicationJourney slug={slug} />;
}
