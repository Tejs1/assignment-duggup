<script>
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

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
				<img src="/img/DuggupLogo.svg" class="" alt="Duggup Logo" />
				<img src="/img/DuggupName.svg" class="pl-1" alt="Duggup Logo" />
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
					<Button variant="cta">
						<div class="text-charcoal flex w-full flex-row items-center justify-between">
							<svg
								width="18"
								height="18"
								viewBox="1 1 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="hover:scale-120 stroke-charcoal origin-center group-hover:stroke-background"
							>
								<path
									d=" M8 5.83333V11.1667M5.33333 8.5H10.6667M5.2 14.5H10.8C11.9201 14.5 12.4802 14.5 12.908 14.282C13.2843 14.0903 13.5903 13.7843 13.782 13.408C14 12.9802 14 12.4201 14 11.3V5.7C14 4.5799 14 4.01984 13.782 3.59202C13.5903 3.21569 13.2843 2.90973 12.908 2.71799C12.4802 2.5 11.9201 2.5 10.8 2.5H5.2C4.0799 2.5 3.51984 2.5 3.09202 2.71799C2.71569 2.90973 2.40973 3.21569 2.21799 3.59202C2 4.01984 2 4.5799 2 5.7V11.3C2 12.4201 2 12.9802 2.21799 13.408C2.40973 13.7843 2.71569 14.0903 3.09202 14.282C3.51984 14.5 4.0799 14.5 5.2 14.5Z"
									stroke-linecap="round"
									stroke-linejoin="round"
									transform="scale(1.25)"
								/>
							</svg>

							<div class="text-accent-charcoal pl-3.5 group-hover:text-background">Post</div>
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
