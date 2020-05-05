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
      p Hi, I'm Kevin Olson, a Full Stack and DevOps engineer.
    .mb-8.text-2xl Technology I love
    .flex
      a.tech-block.h-20.hover_shadow.grayscale-hover(href="https://laravel.com", target="_new")
        img(src="/laravel.svg").mr-4
        img(src="/laravel-text.svg")
      a.tech-block.h-20.w-22.hover_shadow.grayscale-hover(href="https://vuejs.org", target="_new")
        img(src="/vuejs.png").h-full
      a.tech-block.h-20.hover_shadow.grayscale-hover(href="https://aws.amazon.com", target="_new")
        img(src="/aws.png").h-full
      a.tech-block.h-20.w-22.hover_shadow.grayscale-hover(href="https://nuxtjs.org", target="_new")
        img(src="/nuxtjs.svg").h-full

    .mt-8.mb-4.text-2xl Experience
    BlockExperience(company="256 llc", title="Software Engineer", range="Sept 2014 - Now", location="San Francisco, CA - Austin, TX", link="https://256.io")
      p Latest projects including
      ul.list-disc.ml-8
        li
          a(href="https://weareapartments.org/", target="_new") We Are Apartments
          span.pl-1 -
          a(href="https://github.com/acidjazz/waa", target="_new") code
        li
          a(href="https://oneconcern.com/", target="_new") One Concern
          span.pl-1 -
          a(href="https://github.com/acidjazz/waa", target="_new") code
        li
          span.pl-1 Visit the portfolio site for more projects with source code at
          a(href="https://256.io/", target="_new") 256.io

    BlockExperience(company="Rosetta", title="Software Engineer", range="Sept 2013 - Sept 2014", location="San Francisco, CA", link="https://rosetta.com/")
      ul.list-disc.ml-8
        li Built an Android App for Samsung at SXSW featured on the Cover of Forbes Magazine
        li Used NFC and geofencing to help guide people on a curated treasure hunt around the convention grounds
        li Various prizes unlocked at select vendors using NFC and tracking progress
        li Many other various apps / microsites / SPA's ( most under strict NDA )
    BlockExperience(company="Isobar", title="Software Engineer", range="Sept 2008 - Nov 2012", location="San Francisco, CA", link="https://isobar.com/")
      ul.list-disc.ml-8
        li   Multiple apps and sites for Dolby to help promote their new Dolby Atmos technology, and also a project with Adam West
        li   Various projects for Adidas to help promote the 2010 World Cup involving Dwight Howard and Dale Earnhardt Jr.
        li   A Facebook app for Kohler similar to "elf yourself" to embed custom content in rendered video
        li   Many other Facebook apps, SPA's, mobile apps, micro-sites, and some native iOS and Android apps.
    BlockExperience(company="FanIQ", title="Software Engineer", range="Aug 2008 - Sept 2009", location="San Francisco, CA", link="https://www.crunchbase.com/organization/faniq")
      ul.list-disc.ml-8
        li Researched and implemented a STATS provider to harness live stats and updates of all the major sports
        li Created a custom interactive advertisement widget to sell merchandise introducing their first line of revenue
        li Implemented an entire back end in-house reporting structure to locally track impressions/clicks/conversion of all merchandise and later tickets to games.
        li Solely wrote a "quick" sports fantasy game from scratch that allows you to bet virtual currency and play for the span of one day to a week at a time
        li Wrote and maintained multiple Facebook games from scratch (FBG)
        li Interfaces to measure Facebook game metrics and view reports of traffic sources / play paths (FBG)
    BlockExperience(company="Vinyl Interactive", title="Software Engineer", range="Sept 2006 - Aug 2009", location="San Francisco, CA", link="http://vinylinteractive.com/")
      ul.list-disc.ml-8
        li Focused on methodology to increase conversation rates from numerous validity checks to User Interface tweaks
        li Wrote a feature-rich publisher interface including the following
        li Reporting with graphing by Actions, EPC, CTC, and Detailed, allowing you to save custom compiled reports and label them.
        li Customizable summary page where you can choose the type of reports you want to see, allowing any amount.
        li Wrote a series of algorithms to help decide a suitable path of offers based on mining historic data, being specific from particular offer history to the time of day
        li Compiled a demographic engine and interface causing effect to the offer path based on characteristics like sex, age, and education
    BlockExperience(company="Escrow.com", title="Software Engineer", range="Sept 2006 - Aug 2009", location="San Francisco, CA", link="https://escrow.com/")
      ul.list-disc.ml-8
        li Wrote specs and xml daemons/parsers for every major section for partners, lenders, and dealerships to interact with the interface automatically
        li Re-wrote and added to most of the major sections of the interface, integrating xmlhttp and other javascript/dhtml to ease and improve navigation
        li Converted alot of older sections to more optimized code, removing all found deprecated procedures. Templatizing the look and feel and moving functionality into OO style code, making it easy to plug in XML functionality to most of the major sections
        li Wrote an account management system for Customer Service to help sign up, modify, and remove new clients with alot of trouble shooting utilities
    //
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
import BlockExperience from '@/components/BlockExperience'
export default {
  components: { MenuItem, BlockExperience },
  methods: {
    mode() {
      const mode = this.$store.state.mode === 'light' ? 'dark' : 'light'
      this.$store.commit('mode', mode)
    },
  }
}
</script>
