import Link from 'next/link'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">

            <h1 className="text-3xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>

            <p className="text-lg mb-4">
                Je suis Thimothée Lepetz, un développeur junior en informatique en troisième année de BUT.
                J&apos;ai découvert ma passion pour la programmation pendant mes années de lycée.
            </p>

            <p className="text-lg mb-4">
                Au cours de mes années de BUT, j&apos;ai eu l&apos;opportunité de travailler sur plusieurs projets
                qui m&apos;ont permis de mettre en pratique mes connaissances et d&apos;acquérir de nouvelles compétences.
            </p>

            <p className="text-lg mb-4">
                Mon implication et ma motivation m&apos;ont permis de prendre part à des projets et expériences exceptionnels.
                Prenez le temps de découvrir mon portfolio. Vous y trouverez mes projets.
            </p>

            <div className="flex space-x-4">
                <a href="/CV_Thimothee_Lepetz.pdf" download="cv_thimothee_lepetz" className="bg-green-500 text-white px-4 py-2 rounded-md">Télécharger mon CV</a>
                <Link href="https://www.linkedin.com/in/thimothee-lepetz/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Mon LinkedIn
                </Link>
            </div>
        </main>
    )
}
