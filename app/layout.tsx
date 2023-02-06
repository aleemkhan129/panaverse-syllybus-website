"use client"
import { baseTheme, ChakraProvider,withDefaultColorScheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/theme-utils";
import AvailabilitySection from "./AvaialabilitySection";
import ConmmunitySectoin from "./CommunitySection";
import Courses from "./Courses";
import GoalSection from "./Goalsection";
import NavBar from "./Navbar";

// const theme = extendTheme({
//   styles:{
//     global:{
//       body:{
//         bg:"white",
//         color:"white"
//       }
//     }
//     }
// })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ChakraProvider>
        <NavBar/>
        {children}

        <AvailabilitySection/>
        <Courses/>
        <ConmmunitySectoin/>
        <GoalSection/>
        </ChakraProvider>
        </body>
    </html>
  )
}
