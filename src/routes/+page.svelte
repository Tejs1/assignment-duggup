<script>
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import SvgPlus from "@/components/svg/Plus.svelte";
	import HeroLogo from "@/components/svg/HeroLogo.svelte";
	import SvgHome from "@/components/svg/Home.svelte";
	import SvgLearn from "@/components/svg/Learn.svelte";
	import SvgExplore from "@/components/svg/Explore.svelte";

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
	class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between bg-dotted-sm bg-bottom bg-repeat-x p-4 text-charcoal"
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
		<div class="flex w-full justify-between space-x-8">
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
				<DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
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

<header class=" ">
	<div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
		<div class="flex items-center">
			<img class="h-12 w-12 rounded-full" src="/path-to-your-profile-image.jpg" alt="Profile" />
			<div class="ml-4">
				<div class="text-lg font-semibold leading-7">Krishna Kiran</div>
				<div class="text-sm leading-5 text-gray-500">Co-Founder and CEO at Duggup</div>
			</div>
		</div>
	</div>
</header>
