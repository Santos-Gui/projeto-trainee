"use client"
import { Header } from "../_components/header";
import { Footer } from "../_components/footer";
import { Gallery } from "../_components/gallery";

export default function hallOfFame() {
    return (
        <main className="bg-linear-to-r from-orange-400 via-orange to-orange-400">
            <Header/>
            <section>
                <div className="flex flex-col items-center justify-center max-h- h-dvh">
                    <h1 className="font-bold text-5xl font-[Georgia]">MyGamesList</h1>
                    <h6 className="italic text-m font-[Georgia]">Our Games. Our Community</h6>
                </div>
            </section>

            <section>
                <h1 className="font-bold text-4xl text-center font-[Georgia]">Hall of Fame</h1>
            </section>
            
            <section className="mx-auto max-w-6xl px-4">
                <div className="flex gap-4">
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F12%2Fhades-2-roguelike-gameplay.jpg&f=1&nofb=1&ipt=3ce1ad8d7d0cb9eda2ca9e09e917ee8d8a1e925a68afcd3baa8fed10ecf0327b" alt="hade-2" text2="Hades 2" text="Battle beyond the Underworld using dark sorcery to take on the Titan of Time in this bewitching sequel to the award-winning rogue-like dungeon crawler."/>
                    </div>
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F04%2Fhollow-knight-silksong-cover.jpg&f=1&nofb=1&ipt=c1d6edf4a13ead35d471efd578d5687ceb09406555ea79a3baee084810f86ffe" alt="Silksong" text2 ="Hollow Knight: Silksong" text="Discover a vast, haunted kingdom in Hollow Knight: Silksong! Explore, fight and survive as you ascend to the peak of a land ruled by silk and song."
                        />
                    </div>
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2024%2F06%2Fclair-obscure-expedition-33-announcement.jpg&f=1&nofb=1&ipt=daa9ebc59b41a4a429cbec204cb85a3de75a07793f63958f99b8f77c8ca0eee8" alt="Clair obscur Expedition 33" text2="Clair Expedition: Expedition 33" text="Lead the members of Expedition 33 on their quest to destroy the Paintress so that she can never paint death again. Explore a world of wonders inspired by Belle Époque France and battle unique enemies in this turn-based RPG with real-time mechanics."
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nintendo.com%2Feu%2Fmedia%2Fimages%2Fassets%2Fnintendo_switch_2_games%2Fdonkey_kong_bananza%2F2x1_NSwitch2_DonkeyKongBananza_image1600w.jpg&f=1&nofb=1&ipt=9b4a25aa5efe15d418db83ff9a99b54d1fc6a2704416326661d5a43af164e2c2" alt="Donkey kong bananza" text2="Donkey Kong Bananza" text="Explore a vast underground world with Donkey Kong and Pauline—by smashing your way through it!"/>
                    </div>
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F02%2Fpreview-split-fiction.jpg&f=1&nofb=1&ipt=e0c97db3cef93ef1ff1945c488e72293325f6738ac9e8dd8f7945aaad2d263bb" alt="Split fiction" text2="Slipt Fiction" text="Embrace mind-blowing moments as you’re pulled deep into the many worlds of Split Fiction, a boundary-pushing co-op adventure."
                        />
                    </div>
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvsetop.org%2Fuploads%2Fposts%2F2025-02%2Fshujinkou.jpg&f=1&nofb=1&ipt=b9cbc0db5a87e75bf93d8fa7c47e12255079cb85adc16ec21b2072ac34746692" alt="Shujinkou" text2="Shujinkou" text="Shujinkou is a story-driven, turn-based dungeon crawler that provides players with the option to learn Japanese as they play. Play through an enthralling 80-hour story campaign as Shu, Jin, and Kou in a fight to save the world from the Akuma."
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F03%2Fdeath-stranding-2-on-the-beach-key-art-cover.jpg&f=1&nofb=1&ipt=28d615eadf99b865856b2bcb038b30fcfffd69c0ad68a39db8bfd01220efd1ad" alt="Death Stranding 2" text2="Death Stranding 2" text="Death Stranding 2 continues Sam's story in a broken world. America is now connected, but robots have replaced human delivery workers. New global portals are appearing. Sam must survive in this dangerous landscape."/>
                    </div>
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fadventuregamehotspot.com%2Fimages%2Fgames%2F992%2F17237-blue-prince-teaser.jpg&f=1&nofb=1&ipt=8c0e77d9c5dfd604b8d7b81ffbf73bf4bfd2eeead2d98ebb32ded39ca2472e86" alt="Blue Prince" text2 ="Blue Prince" text="Welcome to Mt. Holly, where every dawn unveils a new mystery. Navigate through shifting corridors and ever-changing chambers in this genre-defying strategy puzzle adventure. But will your unpredictable path lead you to the rumored Room 46?"
                        />
                    </div>
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.rpgsite.net%2Fimage%2Fda49c9a1%2F151325%2Foriginal%2Ftrails-in-the-sky-1st-chapter-key-horizontal.png&f=1&nofb=1&ipt=d5b681d90a5706aa5fa4be1e12e48e6cdcc104b08bc4eed9ac053c7aac78caf8" alt="Trails in the sky 1st chapter" text2="Trails in the Sky 1st Chapter" text="Trails in the Sky 1st Chapter reimagines the first chapter of a beloved series, infusing it with enhanced visuals and refined gameplay. Join Estelle and Joshua, partners bound by fate, as they unravel dark conspiracies threatening the peace of the Liberl Kingdom."
                        />
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2025%2F01%2Fkingdom-come-deliverance-2-key-art.jpg&f=1&nofb=1&ipt=48148f4531e25591642972a5104645c53b9b0ed531b57832ebeb24fedaa42527" alt="Kingdom Come Deliverance 2" text2="Kingdom Come Deliverance 2" text="A thrilling story-driven action RPG, with a rich open world, set in 15th century Medieval Europe. Experience the ultimate medieval adventure - through the eyes of young Henry - as you embark on a journey of epic proportions."/>
                    </div>
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.videogameschronicle.com%2Ffiles%2F2023%2F12%2Fmonster-hunter-wilds.jpg&f=1&nofb=1&ipt=48e5b14bed0ded2a8ffd5c0ebbbbeb1de5f384cca7d67d6e047234175f634d08" alt="Monster Hunter Wilds" text2="Monster Hunter Wilds" text="The unbridled force of nature runs wild and relentless, with environments transforming drastically from one moment to the next. This is a story of monsters and humans and their struggles to live in harmony in a world of duality."
                        />
                    </div>
                    <div className="flex-1">
                        <Gallery image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2F0%2F0f%2FPEAK_cover_image.jpg&f=1&nofb=1&ipt=9d6832d4995b4cd7dc6c01ad5eb4c302fb105e00760d55977a6f29d6fd159865" alt="Peak" text2="PEAK" text="PEAK is a co-op climbing game where the slightest mistake can spell your doom. Either solo or as a group of lost nature scouts, your only hope of rescue from a mysterious island is to scale the mountain at its center. Do you have what it takes to reach the PEAK?"
                        />
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    );
}