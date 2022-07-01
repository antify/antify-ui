import AntLayout from '../AntLayout.vue';
import {
  faHouse,
  faPuzzlePiece,
  faRecycle,
  faTrophy,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Ant Layout',
  component: AntLayout,
};

const Template = (args) => ({
  components: { AntLayout },
  setup() {
    return { args };
  },
  template: `
	<AntLayout v-bind="args">
		<template #logo>
			<img
				class="h-8 w-auto"
				src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
				alt="Workflow"
			/>
		</template>
		<template #profilePicture>
			<img
				class="inline-block h-9 w-9 rounded-full"
				src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
				alt=""
			/>
		</template>
		<template #viewProfile> Zum Profil </template>

		<template #default>
			<div class="py-6">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
				</div>
				<div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
					<!-- Replace with your content -->
					<div class="py-4">
						<div
							class="border-4 border-dashed border-gray-200 rounded-lg h-96"
						></div>
					</div>
					<!-- /End replace -->
				</div>
			</div>
		</template>
	</AntLayout>
	`,
});

export const Primary = Template.bind({});
Primary.args = {
  navItems: [
    {
      label: 'Dashboard',
      route: '#',
      icon: faHouse,
      active: true,
    },
    {
      label: 'Benutzer',
      route: '#',
      icon: faUser,
      active: false,
    },
    {
      label: 'Gruppen',
      route: '#',
      icon: faUsers,
      active: false,
    },
    {
      label: 'Ziele',
      route: '#',
      icon: faTrophy,
      active: false,
    },
    {
      label: 'Integrationen',
      route: '#',
      active: false,
    },
    {
      label: 'Templates',
      subItems: [
        {
          label: 'Agenda',
          route: '#',
        },
        {
          label: 'Meetingfelder',
          route: '#',
        },
        {
          label: 'OKR',
          route: '#',
        },
      ],
      icon: faRecycle,
      active: false,
    },
    {
      label: 'Logout',
      active: false,
    },
  ],
  userName: 'Horst Mustermann',
  profileHref: '#',
};
