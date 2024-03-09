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
		<div class="flex w-full justify-between space-x-10">
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
				<DropdownMenu.Trigger class="h-[52] w-[248px]">Open</DropdownMenu.Trigger>
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
	<div class="mt-[50px] flex flex-col items-center font-inter">
		<div
			class=" h-[120px] w-[120px] rounded-full bg-[url(/img/Avatar2.png)] bg-cover bg-center ring-[5px] ring-ring-2 dark:ring-gray-500"
		></div>
		<!-- 120px ? not 128 -->
		<!-- 10? 8 -->
		<!-- ring 5 ? 4 -->
		<div
			class=" w-min py-[10px] text-center text-2xl font-bold leading-7 tracking-normal text-azure"
		>
			Krishna Kiran
		</div>
	</div>
	<div class="mx-14 flex flex-col">
		<div class="flex">
			<div class="flex w-[592px] items-center">
				<p>
					Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
					Engineering. I write hot-takes on building a business, shipping delightful products and
					accelerating product and career growth.
				</p>
			</div>

			<div class="flex flex-col items-end justify-center">
				<img
					class="h-9 w-9"
					src="https://c.animaapp.com/3a5HOfLx/img/social-icons@2x.png"
					alt="profile "
				/>

				<div>
					<div class="text-right">Duggup</div>
					<div class="text-right">Co-Founder and CEO</div>
				</div>
			</div>
		</div>
		<div class="flex justify-between">
			<div><Button variant="cta">Followed</Button></div>
			<div class="flex items-center">
				<div class="flex items-center">
					<div class="text-nowrap">My website</div>
					<SvgLinkExternal />
				</div>

				<DotSvg />
			</div>
		</div>
	</div>
</div>
