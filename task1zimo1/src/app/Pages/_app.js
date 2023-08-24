"use client";
import "../global.css";
import { useClient } from "next/client";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
    const router=useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
        <motion.div
        key={router.route}
        initial="initialState"
        animaate="animateState"
        exit="exitState"
        transition={{duration:0.75}}
        variants={{
            initialState:{
                opacity:0,
            },
            animateState:{
                opacity:1,
            },
            exitState:{

            },
        }}
              className="base-page-size">
            <Component {...pageProps} />
        </motion.div>
    </AnimatePresence>
  );
}
