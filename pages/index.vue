<template lang="pug">
.container.md.px-4
  .flex.justify-between.py-6
    .flex
      .avatar.w-10.h-10.rounded-full.overflow-hidden.mr-2
        img(src="avatar1.jpeg")
    .flex.pri
      MenuItem(icon="brightness-4", type="click", :to="mode").print_hidden
      MenuItem(icon="github", label="github.com/acidjazz", to="https://github.com/acidjazz")
      MenuItem(icon="email", label="acidjazz@gmail.com", to="mailto:acidjazz@gmail.com")
      MenuItem(icon="phone", label="9492908989", to="tel:19492908989")
      MenuItem(icon="file-pdf", to="/kevin-olson-resume.pdf").print_hidden

  .text-2xl Kevin Olson
  PageSection(title="Profile")
    .text-lg Full stack and DevOps engineer

  PageSection(title="Technology I Love")
    .flex.flex-wrap
      BlockTechnology(src="laravel.svg", to="https://laravel.com")
      BlockTechnology(src="vuejs.png", to="https://vuejs.org")
      BlockTechnology(src="aws.png", to="https://aws.amazon.com")
      BlockTechnology(src="nuxtjs.svg", to="https://nuxtjs.org")
      BlockTechnology(src="tailwind.png", to="https://tailwindcss.com")
      BlockTechnology(src="lottie.png", to="https://airbnb.design/lottie/")
    .flex.flex-wrap
      .tag.py-1.px-4.mr-4.mb-4.print_px-1.print_mr-1.print_mb-1(v-for="skill in skills_array") {{ skill }}

  PageSection(title="Experience")
    BlockExperience(company="256 llc", title="Software Engineer", range="Sept 2014 - Now", location="Austin, TX", link="https://256.io")
      ul.list-disc.m-4
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

    BlockExperience(company="Rosetta (Publicis)", title="Software Engineer", range="Sept 2013 - Sept 2014", location="San Francisco, CA", link="https://www.publicissapient.com/")
      ul.list-disc.m-4.my-4
        li Built an Android App for Samsung at SXSW featured on the Cover of Forbes Magazine
        li Used NFC and geofencing to help guide people on a curated treasure hunt around the convention grounds
        li Various prizes unlocked at select vendors using NFC and tracking progress
        li Many other various apps / microsites / SPA's ( most under strict NDA )
    BlockExperience(company="Isobar", title="Software Engineer", range="Sept 2009 - Nov 2012", location="San Francisco, CA", link="https://isobar.com/")
      ul.list-disc.m-4
        li   Multiple apps and sites for Dolby to help promote their new Dolby Atmos technology, and also a project with Adam West
        li   Various projects for Adidas to help promote the 2010 World Cup involving Dwight Howard and Dale Earnhardt Jr.
        li   A Facebook app for Kohler similar to "elf yourself" to embed custom content in rendered video
        li   Many other Facebook apps, SPA's, mobile apps, micro-sites, and some native iOS and Android apps.
    BlockExperience(company="FanIQ", title="Software Engineer", range="Aug 2008 - Sept 2009", location="San Francisco, CA", link="https://www.crunchbase.com/organization/faniq")
      ul.list-disc.m-4
        li Researched and implemented a STATS provider to harness live stats and updates of all the major sports
        li Created a custom interactive advertisement widget to sell merchandise introducing their first line of revenue
        li Implemented an entire back end in-house reporting structure to locally track impressions/clicks/conversion of all merchandise and later tickets to games.
        li Solely wrote a "quick" sports fantasy game from scratch that allows you to bet virtual currency and play for the span of one day to a week at a time
        li Wrote and maintained multiple Facebook games from scratch (FBG)
        li Interfaces to measure Facebook game metrics and view reports of traffic sources / play paths (FBG)
    BlockExperience(company="Vinyl Interactive", title="Software Engineer", range="Sept 2006 - Aug 2009", location="San Francisco, CA", link="http://vinylinteractive.com/")
      ul.list-disc.m-4
        li Focused on methodology to increase conversation rates from numerous validity checks to User Interface tweaks
        li Wrote a feature-rich publisher interface including the following
        li Reporting with graphing by Actions, EPC, CTC, and Detailed, allowing you to save custom compiled reports and label them.
        li Customizable summary page where you can choose the type of reports you want to see, allowing any amount.
        li Wrote a series of algorithms to help decide a suitable path of offers based on mining historic data, being specific from particular offer history to the time of day
        li Compiled a demographic engine and interface causing effect to the offer path based on characteristics like sex, age, and education
    BlockExperience(company="Escrow.com", title="Software Engineer", range="April 2005 - Sept 2006", location="Orange County, CA", link="https://escrow.com/")
      ul.list-disc.m-4
        li Wrote specs and xml daemons/parsers for every major section for partners, lenders, and dealerships to interact with the interface automatically
        li Re-wrote and added to most of the major sections of the interface, integrating xmlhttp and other javascript/dhtml to ease and improve navigation
        li Converted alot of older sections to more optimized code, removing all found deprecated procedures. Templatizing the look and feel and moving functionality into OO style code, making it easy to plug in XML functionality to most of the major sections
        li Wrote an account management system for Customer Service to help sign up, modify, and remove new clients with alot of trouble shooting utilities
    BlockExperience(company="USC", title="Software Engineer", range="March 2004 - April 2005", location="Los Angeles, CA", link="https://usc.edu/")
      ul.list-disc.m-4
        li Contract involving the improvement and re-writing of the ISD (Information Services Division)
        li Interfaces for teachers to help easier manage students taking courses online
        li Improved interfaces students used to view classes online, live or archived
    BlockExperience(company="Foundstone / McAfee", title="Software Engineer", range="Oct 1999 - Aug 2003", location="Orange County, CA", link="https://mcafee.com/")
      ul.list-disc.m-4
        li Composed a web based portable executive dashboard that displayed a wide range of information stored by Foundstone Enterprise
        li Wrote a very complex distributable packaged web interface to a win32 application which communicated via COM/DCOM. (FoundScan 1.0-2.0)
        li Developed and maintained a whole new version of this web interface using a lot more efficient and completely secure communication. (2.6 . 3.0)
        li Wrote an internal interface to update vulnerability information for research and development
        li Wrote a task management application for the IT department so managers could assign tasks to technical and network engineers online. It would compile printer friendly over all statistics for weekly status meetings
        li Developed an inventory application that worked with a bar code scanner to store and keep track of all of the company.s equipment
    BlockExperience(company="Visual Perspectives", title="Software Engineer", range="Aug 1998 - Oct 1999", location="Orange County, CA", link="https://www.glassdoor.com/Reviews/Visual-Perspectives-Internet-Inc-Reviews-E140864.htm")
      ul.list-disc.m-4
        li Wrote and maintained all of the sites for Mary Kate and Ashley Olsen for AOL Time Warner. Compiled a fan club site including circle forums and galleries. Wrote and maintained an online chat room that the twins would answer questions in once a week. Developed their online shopping cart and web based e-mail for fans. All customer input sections were controlled by a modular profanity and language filtering tool
        li www.mary-kateandashley.com, webmail.mary-kateandashley.net, www.herbiesnaturals.com, www.insbop.com, www.cuisinetoyou.net, www.omniexess.com, www.pelicanacc.com, www.onspree.com, www.vpi.net.
        li Built, maintained, and secured all the servers the sites I wrote sat on
        li Monitored, logged, and balanced server utilization - converted databases and daemons to faster and more efficient ones, optimizing bandwidth and performance immensely
    BlockExperience(company="Unisys", title="Field Technician", range="April 1996 - May 1998", location="Orange County, CA", link="https://unisys.com/")
      ul.list-disc.m-4
        li Installed Cisco routers and Bay Networks Hubs to all of the high schools of the Santa Ana School District
        li Routing and testing cat5 and fiber optic cables from each classroom to the main router

  a.mt-10.pb-4.flex.flex-row.items-center.justify-end.print_hidden(href="https://github.com/acidjazz/resume", target="_new")
    i.mdi.mdi-code-braces.mr-1
    i.mdi.mdi-heart.text-red-400.mr-1
    i.mdi.mdi-vuejs.text-green-400.mr-1
    i.mdi.mdi-tailwind.text-teal-400.mr-1
</template>

<script>
import MenuItem from '@/components/MenuItem'
import BlockExperience from '@/components/BlockExperience'
import PageSection from '@/components/PageSection'
import BlockTechnology from '@/components/BlockTechnology'
export default {
  components: { MenuItem, BlockExperience, PageSection, BlockTechnology },
  data () {
    return {
      skills: 'php javascript nodejs python git git-flow github laravel vapor passport socialite ux vuejs nuxtjs aws ec2 s3 lambda phpunit jest css html sass stylus pugjs pwa twa'
    }
  },
  computed: {
    skills_array () {
      return this.skills.split(' ')
    }
  },
  methods: {
    mode() {
      const mode = this.$store.state.mode === 'light' ? 'dark' : 'light'
      this.$store.commit('mode', mode)
    },
  }
}
</script>
