// page.tsx
import Head from 'next/head';
import MyMap from './components/MyMap';
import MobileStoryViewer from './components/MobileStoryViewer';
import Header from './components/Header'

export default function Home() {
    return (
        <div style={{ position: 'relative', height: '90vh', overflow: 'hidden', maxWidth: '375px', margin: ' auto' ,marginTop:'40px'}}>
            <Head>
                <title>Your App Title</title>
                <meta name="description" content="Your app description" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <MyMap />
            <MobileStoryViewer />
        </div>
    );
}
