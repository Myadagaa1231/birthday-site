"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "@/components/Loader"
import Countdown from "@/components/Countdown"
import DaysTogether from "@/components/DaysTogether"
import PhotoGallery from "@/components/PhotoGallery"
import Message from "@/components/Message"
import MusicPlayer from "@/components/MusicPlayer" // Uncomment this if you want to add a background song
import FloatingElements from "@/components/FloatingElements"
import TapToReveal from "@/components/TapToReveal"

// Change this to your anniversary date
const ANNIVERSARY_DATE = "2025-09-27T22:00:00"
// Change this to the date you got together
const TOGETHER_DATE = "2006-09-29T00:00:00"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showTapToReveal, setShowTapToReveal] = useState(false)
  const [playSong, setPlaySong] = useState(false) // Uncomment this if you want to add a background song

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check if the anniversary date has passed
    const now = new Date()
    const anniversary = new Date(ANNIVERSARY_DATE)
    if (now >= anniversary) {
      setShowContent(true)
      setShowTapToReveal(true)
    }
  }, [])

  const handleCountdownComplete = () => {
    setShowContent(true)
    setShowTapToReveal(true)
  }

  const handleReveal = () => {
    setShowTapToReveal(false)
    setShowContent(true)

    // Uncomment this if you want to add a background song
     setTimeout(() => {
       setPlaySong(true)
     }, 1000);
  }

  // Add your photos here
  const photos = [
    { src: "/IMG_0729.jpeg", alt: "Бидний домогт пиццатай зайсан гаралт" },
    { src: "/IMG_0922.jpeg", alt: "Өвлийн тэр нэгэн ногоорсон ногоон өдрүүд" },
    { src: "/IMG_1231.jpeg", alt: "Саанжигийн төрсөн өдрөөр" },
    { src: "/IMG_0929.jpeg", alt: "Байжий, би чамайг хайрладаг шиг тэд нар чамайг хайрладаг уу?" },
  ]

  // Change this message according to you
  const message = `To: Хамгаас хайрт Жаагийдаа, 
Аз жаргал, чимх гуниг, адал явдал, дурсамжаар дүүрэн ахиад олдохгүй 19 нас гэх номынхоо сүүлийн бүлгийг бичиж буй чамдаа хорьж болохгүй хорин насныхаа босгон дээр ирснийг нь тэмдэглэхийн зэрэгцээ халуун баяр хүргэе. Зодолдож танилцсан хүмүүс зовлонгүй нөхөрлөдөг гэдэг ч бид “Хоол хүмүүсийг холбодог” гэх үгийг үнэн гэдгийг амьдрал дээр баталсан найзууд билээ. Хэдий салаа замын эрхээр гурвуулаа салсан ч бидний зүрх сэтгэл нэгэн хэмнэлд үргэлж цохилно. Сайхан ирээдүйн төлөө бид үргэлж хамтдаа!

Чамд минь хүнд байж болох хамгийн сайхан чанарууд бүгд байдаг. Ямар ч юманд хүлээцтэй тайван ханддаг, сэтгэлтэй, ээж шиг минь халамжтай, хариуцлагатай, бүхий л мэдрэмжүүдийг минь ойлгодог, сэтгэлээ нээгээд ярихад урамтай, дэндүү хөгжилтэй, ухаантай гиорл ккк. Үнэхээр л ямар ч хүний сайн найз нь байж чаддаг, хэн хүний итгэлийг даасан гайхалтай оршихуй гэдгээ мэдэх үү? Мэдэхгүй бол одоо мэдэж ав золиг минь.

Чиний бүх зүйл хөөрхөн. Торгон хилийг хараад ичээд бантдаг чинь хөөрхөн. Яриан дундаа инээгээд биднийг цохидог чинь хөөрхөн. Хэтийдсэн даруухан зан дунд хэсэгхэн хараачихдаг чинь хөөрхөн.   Магадлалын багшийг ерөнхийдөө гэж дууддаг чинь хөөрхөн. Жижигхэн детайл бүрийг санаж байдаг чинь хөөрхөн. Хэнд ч харуулдаггүй дотоод хүнээ бидэнд нээдэг чинь хөөрхөн. Үе үе цэнэглэдэг чинь хөөрхөн. Шөнө зайсан гарахад хаа байсан гэрээсээ бид хоёртой уулзах гээд хүрээд ирдэг чинь хөөрхөн. Шантраад эргээд харахад “Хамтдаа байвал хага шаанаа” гээд байж байдаг чинь хөөрхөн. Ангиараа Сэлэнгэ явахад хийж авчирсан сендвич чинь хөөрхөн. Хааяа далжигнаад явангуут “Дарваан минь, тэнэгтээд байгаач” гээд загнадаг чинь хөөрхөн. Хамтдаа хоол идэхдээ хоолноосоо илүү ундаагаа түрүүлээд дуусгачихдаг ундаа сайн уудаг чинь хөөрхөн. Ер нь л чамайг өөрийгөө ямар тос даасан ааруул шиг нүнжигтэй, эмээгийн бүрсэн тараг шиг сайхан хүн бэ гэдгийг ойлгож байгаа гэж найдаж байна ккк.

Бидэнтэй нөхөрлөдөгт, хааяа нэг цохиод авдагт, хамтдаа хоол иддэгт, хэзээд биднийг инээлгэдэгт, халамжилдагт, дэмждэгт гээд бидний амьдралд орж ирсэнд, Жаргалсүрэн гэх хүн энэ дэлхий дээр оршин буйд баярлалаа<3

Амьдрал чамайг минь дэндүү олон удаа сорьж, хэцүү зүйлсийг үүрүүлж байгаа ч удахгүй бүх зүйл сайхан болох өдөр ирнэ ээ. Тэгэхээр сэтгэлийн хаттай байж, одоогийнх шигээ хичээгээд байгаарай.

Хэдий нэг сургуульд орж чадаагүй ч их сургуульд суралцах 3 жилийн хугацаагаа амжилттай дуусгачхаад хамтдаа эх орондоо очоод Монголынхоо бүх караокег дуусгацгаая! Хол бас завгүй байгааг ойлгож байгаа ч бид хоёрыг бага гомдоогоорой булдруу минь. Хааяа санаад байдаг юм шүү. Ялангуяа түргэн хоолны газар ороод газтай ундаа уухдаа. Шинэ жилээр уулзаад дараа нэг дурсаад ярих сайхан дурсамжийг хамтдаа бүтээцгээе. Юу ч болсон хажууд чинь биеэрээ байж чадахгүй ч сэтгэлээрээ үргэлж чинийхээ сонсох чих, түших мөр, тэврэх гар нь гэдгийг санаж яваарай. Өөрсдөдөө хүсдэг бүх сайн сайхан бүхнээ чамдаа ч гэсэн хүсэж явдаг юм шүү. Чамдаа сар луу яваад эргээд ирэх хэмжээний их хайртай шүү. Бүр өөрийгөө хайрладгаас ч илүү их хайртай.

Манан мэт сарнисан ч чамд үүл мэт хайртай
Салхи мэт зуларсан ч чамд тал мэт хайртай
Ус мэт ширгэсэн ч чамд газар мэт хайртай
Нар мэт мандсан ч чамд шөнө мэт хайртай
Цаг хугацаа мэт урссан ч чамд өнгөрсөн мэт хайртай
Хорвоо мэт хатуурхсан ч чамд тайтгарал мэт хайртай
Навч мэт унасан ч чамд мод мэт хайртай
Шаналал мэт мартагдсан ч чамд дурсамж мэт хайртай 
Догдлол мэт мэдрэгдсэн ч чамд дурлал мэт хайртай.

From: Тулгын гурван чулууны хоёр чулуунаас нь.`

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : !showContent ? (
          <motion.div
            key="countdown-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 relative"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="absolute bottom-1/4 left-1/4 w-20 h-20 text-5xl animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                💝
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-center mb-12 relative"
            >
              <div className="absolute -top-16 -left-16 w-32 h-32 text-5xl animate-float">🌸</div>
              <div className="absolute -bottom-28 -right-14 w-32 h-32 text-5xl animate-float-delay">🌺</div>

              <h1 className="text-4xl md:text-5xl py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4 animate-gradient">
                Хэр тэвчээртэй хүүхэд вэ гэдгийг нь харъя даа
              </h1>
              <p className="text-xl text-purple-700 font-medium">Бидний чамайг гэх хайрыг мэдмээр байна уу? ❤️</p>
            </motion.div>

            <Countdown targetDate={ANNIVERSARY_DATE} onComplete={handleCountdownComplete} />
          </motion.div>
        ) : showTapToReveal ? (
          <TapToReveal key="tap-to-reveal" onReveal={handleReveal} />) : (
          <>
            {/* Uncomment this if you want to add a background song */}
            <MusicPlayer playSong={playSong} /> 
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-center mb-12 relative"
              >
                <div className="absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float">🎉</div>
                <div className="absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay">
                  🎊
                </div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-3 animate-gradient">
                  Happy Birthday Mr.J!
                </h1>
                <p className="text-xl text-purple-700 font-medium">Торгон хилийн ирээдүйн гэргийд зориулав ❤️</p>
              </motion.div>

              <DaysTogether startDate={TOGETHER_DATE} animationDuration={3} />

              <PhotoGallery photos={photos} />

              <Message message={message} />

              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-16 mb-8 text-pink-600"
              >
                <p className="text-lg font-medium">Made with ❤️ by Nomjeen and Myadagaa</p>
              </motion.footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
