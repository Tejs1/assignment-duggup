<script>
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import SvgPlus from "@/components/svg/Plus.svelte";
	import HeroLogo from "@/components/svg/HeroLogo.svelte";
	import SvgHome from "@/components/svg/Home.svelte";
	import SvgLearn from "@/components/svg/Learn.svelte";
	import SvgExplore from "@/components/svg/Explore.svelte";
	import SvgLinkExternal from "@/components/svg/LinkExternal.svelte";
	import DotSvg from "@/components/svg/Dots.svelte";
	import BorderCompany from "@/components/svg/BorderCompany.svelte";
	import BorderBlog from "@/components/svg/BorderBlog.svelte";
	import ChevronDown from "lucide-svelte/icons/chevron-down";

	// import { onMount } from 'svelte';
	// onMount(() => {
	// 	const navbarDropdown = document.getElementById('navbar-dropdown');
	// 	const collapseToggle = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
	// 	collapseToggle.addEventListener('click', () => {
	// 		if (navbarDropdown.getAttribute('aria-expanded') === 'true') {
	// 			navbarDropdown.setAttribute('aria-expanded', 'false');
	// 		} else {
	// 			navbarDropdown.setAttribute('aria-expanded', 'true');
	// 		}
	// 	});
	// });
</script>

<nav
	class="mx-auto flex w-full flex-wrap items-center justify-between bg-dotted-sm bg-bottom bg-repeat-x py-4 text-charcoal"
>
	<a href="/">
		<div class="flex items-center justify-center">
			<HeroLogo full={true} class="fill-[#33333]" />
		</div>
	</a>

	<button
		data-collapse-toggle="navbar-dropdown"
		type="button"
		class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
		aria-controls="navbar-dropdown"
		aria-expanded="false"
	>
		<span class="sr-only">Open main menu</span>
		<svg
			class="h-5 w-5"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 17 14"
		>
			<path
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M1 1h15M1 7h15M1 13h15"
			/>
		</svg>
	</button>
	<div class="flex h-full w-auto items-center space-x-14" id="navbar-dropdown">
		<ul
			class="mt-0 flex h-full flex-row items-center space-x-8 border-0 font-inter text-sm rtl:space-x-reverse"
		>
			<li>
				<a
					href="/"
					class="flex flex-row items-center justify-center justify-items-start text-nowrap"
					aria-current="page"
				>
					<SvgHome />
					<div class="ml-3">Home</div>
				</a>
			</li>
			<li>
				<a
					href="/"
					class="flex flex-row items-center justify-center justify-items-start text-nowrap"
					aria-current="page"
				>
					<SvgExplore />
					<div class="ml-3">Explore</div>
				</a>
			</li>
			<li>
				<a
					href="/"
					class="flex flex-row items-center justify-center justify-items-start text-nowrap"
					aria-current="page"
				>
					<SvgLearn />
					<div class="ml-3">Learn</div>
				</a>
			</li>
		</ul>
		<div class="flex w-full items-center justify-between space-x-10">
			<Button
				variant="cta"
				size="custom"
				class="flex flex-row items-center justify-center justify-items-start text-nowrap"
			>
				<div class="flex w-full flex-row items-center justify-between text-charcoal">
					<SvgPlus
						class="hover:scale-120 origin-center stroke-charcoal group-hover:stroke-background"
					/>
					<div class="text-accent-charcoal pl-3 font-inter group-hover:text-background">Post</div>
				</div>
			</Button>

			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="">
					<div class="flex items-center gap-3">
						<div
							class="ml-4 flex h-12 w-12 items-center justify-center rounded-full border-[0.5px] border-charcoal"
						>
							<img src="/img/Image1.png" alt="" class=" rounded-full" />
						</div>

						<div class="font-inter-m text-xl/[20px] font-medium text-charcoal">Krishna Kiran</div>
						<ChevronDown />
					</div>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>My Account</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Item>Billing</DropdownMenu.Item>
						<DropdownMenu.Item>Team</DropdownMenu.Item>
						<DropdownMenu.Item>Subscription</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</nav>

<div class=" mx-auto flex w-full flex-row flex-wrap items-center justify-center text-charcoal">
	<!-- 50px? not 48-->
	<div class="mt-[44px] flex flex-col items-center font-inter">
		<div
			class=" h-[120px] w-[120px] rounded-full bg-[url(/img/Avatar2.png)] bg-cover bg-center ring-[5px] ring-ring-2 dark:ring-gray-500"
		></div>
		<!-- 120px ? not 128 -->
		<!-- 10? 8 -->
		<!-- ring 5 ? 4 -->
		<div
			class="  w-min pb-[18px] pt-[16px] text-center text-2xl font-bold leading-7 tracking-normal text-azure"
		>
			Krishna Kiran
		</div>
	</div>
	<div class="mx-14 flex flex-col">
		<div class="flex gap-32">
			<div class="flex w-[584px] items-start text-sm leading-6">
				<p>
					Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
					Engineering. I write hot-takes on building a business, shipping delightful products and
					accelerating product and career growth.
				</p>
			</div>

			<div class="flex flex-col items-end justify-center">
				<img class="h-9 w-9" src="/img/CompanyDuggupIcon.png" alt="profile " />

				<div class="mt-2">
					<div class="text-right font-inter-b text-base leading-5 text-black">Duggup</div>
					<div class="text-slate mt-1 text-right text-sm leading-[14px]">Co-Founder and CEO</div>
				</div>
			</div>
		</div>
		<div class="flex justify-between pt-5">
			<div><Button variant="cta" class=" px-6 text-sm" size="custom">Followed</Button></div>
			<div class="flex items-center">
				<a class="mr-4 flex items-center text-charcoal" href="/">
					<div class="mr-1 text-nowrap text-sm">My website</div>
					<SvgLinkExternal />
				</a>

				<DotSvg />
			</div>
		</div>
	</div>
</div>

<div class=" w-full">
	<div class=" ml-12 flex flex-col">
		<div class="flex flex-row">
			<div class="w-[200px] bg-slate-400">
				<div class=" flex items-center justify-end gap-5">
					<div class="text-slate pt-1 text-xs">Dec 2023</div>
					<BorderBlog />
				</div>
			</div>
			<div class="w-[780px]">
				<div class="mx-7 my-8 flex flex-row gap-9">
					<div class=" w-[344px] rounded-xl">
						<div class="h-[136px] rounded-t-xl bg-[url('/img/steve.png')]"></div>
						<div
							class="border-cool h-[88px] rounded-b-xl border-x-[0.5px] border-b-[0.5px] bg-white"
						>
							<div class="text-onyx p-6 text-sm">
								No amount of technology can convert a bad story into a good story.
							</div>
						</div>
					</div>
					<div class=" w-[344px] rounded-xl">
						<div class="h-[136px] rounded-t-xl bg-[url('/img/sam.png')]"></div>
						<div
							class="border-cool h-[88px] rounded-b-xl border-x-[0.5px] border-b-[0.5px] bg-white"
						>
							<div class="text-onyx p-6 text-sm">
								Most people don't have original ideas. Here is how Sam Altman pushes himself to
								have...
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-row">
			<div class="w-[200px] bg-slate-300">
				<div class=" flex items-center justify-end gap-5">
					<div class="text-slate flex flex-col items-end justify-end pt-1 text-xs">
						<div
							class="mb-2 h-12 w-12 bg-[url('/img/CompanyDuggupIcon.png')] bg-contain bg-center bg-no-repeat"
						></div>
						<div class="flex flex-col items-end justify-end">
							<div class="text-onyx mb-1 font-inter-b text-base font-bold">Duggup</div>
							<p class="text-slate mb-0.5 font-inter text-xs font-normal">San Francisco Bay Area</p>
							<p class="text-slate font-inter text-xs font-normal">Joined</p>
							<p class="text-slate font-inter text-xs font-normal">Nov 2023</p>
						</div>
					</div>
					<BorderCompany />
				</div>
			</div>
			<div>
				<div class="drop-shadow-sky mx-7 my-8 h-[84px] w-[720px] rounded-xl bg-white">
					<div class="grid gap-1 px-5 py-4">
						<h2 class="text-onyx font-inter-b text-xl font-bold leading-8">Co-Founder and CEO</h2>
						<p class="text-slate font-inter text-xs font-normal leading-4">Full-time · Remote</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-row">
			<div class="w-[200px] bg-slate-400">
				<div class=" flex items-center justify-end gap-5">
					<div class="text-slate pt-1 text-xs">Dec 2023</div>
					<BorderBlog />
				</div>
			</div>
			<div class="w-[780px]">
				<div class="mx-7 my-8 flex flex-row gap-9">
					<div class=" w-[344px] rounded-xl">
						<div class="h-[136px] rounded-t-xl bg-[url('/img/desktop.png')]"></div>
						<div
							class="border-cool h-[88px] rounded-b-xl border-x-[0.5px] border-b-[0.5px] bg-white"
						>
							<div class="text-onyx p-6 text-sm">
								Startup Lesson I am reflecting. Don't build for the "average person".
							</div>
						</div>
					</div>
					<div class=" w-[344px] rounded-xl">
						<div class="h-[136px] rounded-t-xl bg-[url('/img/map.png')]"></div>
						<div
							class="border-cool h-[88px] rounded-b-xl border-x-[0.5px] border-b-[0.5px] bg-white"
						>
							<div class="text-onyx h-full p-6 text-sm">
								Your biggest regrets at 80 will be acts of omission.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-row">
			<div class="w-[200px] bg-slate-300">
				<div class=" flex items-center justify-end gap-5">
					<div class="text-slate flex flex-col items-end justify-end pt-1 text-xs">
						<div
							class="mb-2 h-12 w-12 bg-[url('/img/CompanyBetterupIcon.png')] bg-contain bg-center bg-no-repeat"
						></div>
						<div class="flex flex-col items-end justify-end">
							<div class="text-onyx mb-1 font-inter-b text-base font-bold">BetterUp</div>
							<p class="text-slate mb-0.5 font-inter text-xs font-normal">San Francisco Bay Area</p>
							<p class="text-slate font-inter text-xs font-normal">Joined</p>
							<p class="text-slate font-inter text-xs font-normal">Sep 2022</p>
						</div>
					</div>
					<BorderCompany />
				</div>
			</div>
			<div>
				<div class="drop-shadow-sky mx-7 my-8 h-[84px] w-[720px] rounded-xl bg-white">
					<div class="grid gap-1 px-5 py-4">
						<h2 class="text-onyx font-inter-b text-xl font-bold leading-8">VP Engineering</h2>
						<p class="text-slate font-inter text-xs font-normal leading-4">Full-time</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
