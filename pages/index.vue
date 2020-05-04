<template lang="pug">
  .container.lg
    .flex.justify-between.p-6
      .flex
        .avatar.w-10.h-10.rounded-full.overflow-hidden
          img(src="avatar1.jpeg")
        .font-bold.py-2.px-6.text-lg kevin olson
      .flex
        .mx-2
          MenuItem(icon="github", to="https://github.com/acidjazz")
        .mx-2
          MenuItem(icon="email", to="mailto:acidjazz@gmail.com")
        .mx-2
          MenuItem(icon="phone", to="tel:19492908989")
        .mx-2
          MenuItem(icon="download", to="/resume.pdf")
        .mx-2
          MenuItem(icon="brightness-4", type="click", :to="mode")
    .text-4xl.my-12
      p Hello, I'm Kevin Olson, a Full Stack and DevOps engineer.

    .mb-8.text-2xl Technology I love
    .flex
      a.tech-block.h-20.hover_shadow.grayscale-hover(href="https://laravel.com", target="_new")
        img(src="/laravel.svg").mr-4
        img(src="/laravel-text.svg")
      a.tech-block.h-20.w-22.hover_shadow.grayscale-hover(href="https://vuejs.org", target="_new")
        img(src="/vuejs.png").h-full
      a.tech-block.h-20.hover_shadow.grayscale-hover(href="https://aws.amazon.com", target="_new")
        img(src="/aws.png").h-full
      a.tech-block.h-20.w-22.shover_shadow.grayscale-hover(href="https://nuxtjs.org", target="_new")
        img(src="/nuxtjs.png").h-full

    .mt-8.mb-4.text-2xl Experience
    //.text-m
      p   Sept `14 - Current
        span &nbsp;
        b 256 llc
      p   Please refer to &nbsp;
        a.text-blue-400(href="https://256.io", target="_new") 256.io
      p   Sept `13 - Sept `14Rosetta
      p   Built an Android App for Samsung at SXSW featured on the Cover of Forbes Magazine
      p   Used NFC and geofencing to help guide people on a curated treasure hunt around the convention grounds
      p   Various prizes unlocked at select vendors using NFC and tracking progress
      p   Many other various apps / microsites / SPA's ( most under strict NDA )
      p   Sept `10 - Nov `12isobar
      p   Multiple apps and sites for Dolby to help promote their new Dolby Atmos technology, and also a project with Adam West
      p   Various projects for Adidas to help promote the 2010 World Cup involving Dwight Howard and Dale Earnhardt Jr.
      p   A Facebook app for Kohler similar to "elf yourself" to embed custom content in rendered video
      p   Many other Facebook apps, SPA's, mobile apps, micro-sites, and some native iOS and Android apps.
      p   Sept `08 - Sept `10K-Factor Media / Facebook
      p   Built several games on facebook, some full stack and some w/ a flash developer for the front end
      p   Aug `08 - Sept `09FanIQ
      p   Researched and implemented a STATS provider to harness live stats and updates of all the major sports
      p   Created a custom interactive advertisement widget to sell merchandise introducing their first line of revenue
      p   Implemented an entire back end in-house reporting structure to locally track impressions/clicks/conversion of all merchandise and later tickets to games.
      p   Solely wrote a "quick" sports fantasy game from scratch that allows you to bet virtual currency and play for the span of one day to a week at a time
      p   Wrote and maintained multiple Facebook games from scratch (FBG)
      p   Interfaces to measure Facebook game metrics and view reports of traffic sources / play paths (FBG)
      p   Nov `07 - July `08Eight Days Inc (Hot or Not)
      p   Re-wrote the virtual gifts section to include gifts outside of flowers, w/ back-end interfaces to add/remove/change gifts
      p   Re-wrote the gift purchasing system to allow multiple gifts/bundles to be purchased at once
      p   Implemented a chat system including a bottom chat bar and friends list allowing multiple chats at once (using comet programming)
      p   Numerous performance tweaks/improvements
      p   Sept `06 - Oct `07Vinyl Interactive
      p   Focused on methodology to increase conversation rates from numerous validity checks to User Interface tweaks
      p   Wrote a feature-rich publisher interface including the following
      p   Reporting with graphing by Actions, EPC, CTC, and Detailed, allowing you to save custom compiled reports and label them.
      p   Customizable summary page where you can choose the type of reports you want to see, allowing any amount.
      p   Wrote a series of algorithms to help decide a suitable path of offers based on mining historic data, being specific from particular offer history to the time of day
      p   Compiled a demographic engine and interface causing effection to the offer path based on characteristics like sex, age, and education
      p   April `05 - Sept `06Finance Express / escrow.com
      p   Wrote specs and xml daemons/parsers for every major section for partners, lenders, and dealerships to interact with the interface automatically
      p   Re-wrote and added to most of the major sections of the interface, integrating xmlhttp and other javascript/dhtml to ease and improve navigation
      p   Converted alot of older sections to more optimized code, removing all found deprecated procedures. Templatizing the look and feel and moving functionality into OO style code, making it easy to plug in XML functionality to most of the major sections
      p   Wrote an account management system for Customer Service to help sign up, modify, and remove new clients with alot of trouble shooting utilities
      p   March `04 - April `05University of Southern California
      p   Contract involving the improvement and re-writing of the ISD (Information Services Division)
      p   Interfaces for teachers to help easier manage students taking courses online
      p   Improved interfaces students used to view classes online, wether live or archived
      p   Feb `03 - March `04CondeNet/Conde Nast
      p   Various contract jobs dealing mostly with back-end web interfaces for various administrative and sales work.
      p   Using mostly PHP and XML to communicate with invoice software, compiling and presenting specific invoice-related reports.
      p   Oct `99 - Aug `03Foundstone / McAfee
      p   Composed a web based portable executive dashboard that displayed a wide range of information stored by Foundstone Enterprise
      p   Wrote a very complex distributable packaged web interface to a win32 application which communicated via COM/DCOM. (FoundScan 1.0-2.0)
      p   Developed and maintained a whole new version of this web interface using a lot more efficient and completely secure communication. (2.6 . 3.0)
      p   Wrote an internal interface to update vulnerability information for research and development
      p   Wrote a task management application for the IT department so managers could assign tasks to technical and network engineers online. It would compile printer friendly over all statistics for weekly status meetings
      p   Developed an inventory application that worked with a bar code scanner to store and keep track of all of the company.s equipment
      p   Aug `98 - Oct `99Visual Perspectives Internet
      p   Wrote and maintained all of the sites for Mary Kate and Ashley Olsen for AOL Time Warner. Compiled a fan club site including circle forums and galleries. Wrote and maintained an online chat room that the twins would answer questions in once a week. Developed their online shopping cart and web based e-mail for fans. All customer input sections were controlled by a modular profanity and language filtering tool
      p   www.mary-kateandashley.com, webmail.mary-kateandashley.net, www.herbiesnaturals.com, www.insbop.com, www.cuisinetoyou.net, www.omniexess.com, www.pelicanacc.com, www.onspree.com, www.vpi.net.
      p   Built, maintained, and secured all the servers the sites I wrote sat on
      p   Monitored, logged, and balanced server utilization - converted databases and daemons to faster and more efficient ones, optimizing bandwidth and performance immensely
      p   April `97 - May `98Unisys - Field Technician
      p   Installed Cisco routers and Bay Networks Hubs to all of the high schools of the Santa Ana School District
      p   Routing and testing cat5 and fiber optic cables from each classroom to the main router
</template>

<script>
import MenuItem from '@/components/MenuItem'
export default {
  components: { MenuItem },
  methods: {
    mode() {
      const mode = this.$store.state.mode === 'light' ? 'dark' : 'light'
      this.$store.commit('mode', mode)
    },
  }
}
</script>
