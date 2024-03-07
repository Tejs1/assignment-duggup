<script>
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import SvgPlus from "@/components/svg/Plus.svelte";
	import HeroLogo from "@/components/svg/HeroLogo.svelte";

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

<nav class="text-charcoal h-16">
	<div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
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
		<div class=" w-full md:block md:w-auto" id="navbar-dropdown">
			<ul
				class="flex flex-col font-inter md:mt-0 md:flex-row md:space-x-8 md:border-0 rtl:space-x-reverse"
			>
				<li>
					<a href="/" class="" aria-current="page">Home</a>
				</li>
				<li>
					<a href="/" class="" aria-current="page">Explore</a>
				</li>
				<li>
					<a href="/" class="" aria-current="page">Learn</a>
				</li>
				<li>
					<Button variant="cta" size="custom" class="">
						<div class="text-charcoal flex w-full flex-row items-center justify-between">
							<SvgPlus
								class="hover:scale-120 stroke-charcoal fill-taint origin-center  group-hover:fill-none group-hover:stroke-background"
							/>
							<div class="text-accent-charcoal pl-3 group-hover:text-background">Post</div>
						</div>
					</Button>
				</li>
				<li>
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
				</li>
			</ul>
		</div>
	</div>
</nav>
