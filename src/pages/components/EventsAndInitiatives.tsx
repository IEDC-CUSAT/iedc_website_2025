import EventCard from "@/components/EventCard";
import PastEventCard from "@/components/PastEventCard";
import { Separator } from "@/components/ui/separator";

const upcomingEvents = [
{
  id: "founder-next-door",
  title: "THE FOUNDER NEXT DOOR",
description: `Startups, but make it simple.

The Founder Next Door is an 8-week, hands-on startup program for anyone who wants to start something but doesn’t know where to begin. No perfect ideas. No pressure. Just learning by doing.

WHAT YOU’LL DO
• Identify real problems worth solving
• Talk to users and validate ideas
• Build a scrappy MVP
• Learn startup fundamentals that matter
• Get early users and feedback

WHO IT’S FOR
• First-time founders and curious students
• Designers, marketers, and non-coders

The program ends with Demo Day at CITTIC, where you pitch your first startup.`,
  linkText: "Check it out here",
  linkUrl:
    "https://sturdy-tarn-d7e.notion.site/The-Founder-Next-door-275cb1b52b69809c9b8df2ea8f55f6d9",
  registerText: "",
  registerUrl: "",
  footer: "8 weeks. One idea. Real execution. Demo Day at CITTIC.",
  imageUrl: "/founder-next-door-2.jpeg",
}

//,  
//   {
//     id: "founder-next-door",
//     title: "FOUNDER NEXT DOOR",
//     description: `Alright, y'all. Founder Next Door is here!!!! ✨

// If you've ever said 'I wanna start something' or you're just 
// unhinged enough to try...
// this is literally your chance. 💯

// Wanna know what the program's all about? 👀`,
//     linkText: "Check it out here",
//     linkUrl: "https://sturdy-tarn-d7e.notion.site/The-Founder-Next-door-275cb1b52b69809c9b8df2ea8f55f6d9",
//     registerText: "",
//     registerUrl: "",
//     footer: "Come as you are; leave as a founder.",
//     imageUrl: "/founder-next-door-2.jpeg",
//   },
];

const pastEvents = [
  {
    id: "makeaton",
    title: "Makeaton 7.0",
    description:
      "CITTIC CUSAT proudly hosted MAKE-A-TON 7.0 - powered by Eduport! The event brought together innovators and coders for Kerala's most exciting hackathon, complete with MLH. With a special track on 'Best Use of Conductor' sponsored by Orkes, along with other exciting tracks by Eduport, GoDaddy, Aarbit, Stremlit, Cloudflare and more, participants competed for prizes worth over 7 lakh in cash and 8 track prizes.",
    imageUrl: "/Makeaton (1).jpg",
  },
  {
    id: "innovate-and-elevate",
    title: "Innovate and Elevate",
    description:
      "Innovate & Elevate: Empowering Entrepreneurs. Gain insider insights, guidance from experts, and network with peers. Don’t miss this opportunity to kickstart your entrepreneurial journey! \n\n Join interactive workshops, hands-on mentoring sessions, and panel discussions with industry leaders. Discover strategies to turn ideas into impact, build scalable ventures, and navigate challenges with confidence.",
    imageUrl: "/innovate-and-elevate.jpeg",
  },
  {
    id: "redbull-basement",
    title: "Redbull Basement",
    description:
      "Red Bull Basement, powered by Make-a-Ton 7.0 — where bold ideas meet real-world innovation. Level up your creativity and turn sparks into solutions that make an impact! \n\n Got that wild concept buzzing like a rogue WiFi signal? It’s time to take it global with Red Bull Basement. Collaborate with fellow innovators, tackle real challenges, and gain access to mentorship from industry experts. \n\n Dream it. Build it. Launch it.",
    imageUrl: "/redbull-basement.jpeg",
  },
];

const EventsAndInitiatives = () => {
  return (
    <section>
      <h2 className="font-serif text-3xl md:text-4xl mb-8 pb-2 border-b border-border">
        EVENTS & INITIATIVES
      </h2>
      
      <h3 className="font-serif text-2xl md:text-3xl text-center mb-8 pb-2 border-b border-border">
        UPCOMING EVENTS
      </h3>
      
      <div className="space-y-6">
        {upcomingEvents.map((event, index) => (
          <div id={event.id} key={index}>
            <EventCard {...event} />
          </div>
        ))}
      </div>

      <h3 className="font-serif text-2xl md:text-3xl text-center mt-16 mb-8 pb-2 border-b border-border">
        PAST EVENTS
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-8 items-center">
        {pastEvents.map((event, index) => (
          <>
            <div id={event.id} key={index} className="px-4">
              <PastEventCard {...event} />
            </div>
            {index < pastEvents.length - 1 && (
              <Separator orientation="vertical" className="hidden lg:block h-full" />
            )}
          </>
        ))}
      </div>
    </section>
  );
};

export default EventsAndInitiatives;
