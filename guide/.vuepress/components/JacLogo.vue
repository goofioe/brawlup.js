<template>
	<router-link :to="$localePath" class="jac-logo">
		<span class="site-name">
			<span class="site-name-text">
				brawl<span class="site-name-js">up</span>
			</span>
		</span>
	</router-link>
</template>

<style lang="stylus">
.jac-logo .site-name {
	background: url('/blue-icon.png') top left / contain no-repeat;
	padding-left: 1.5em;
	max-height: 100%;
	display: flex;
	align-items: center;
	font-size: 2rem;

	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}

	@media screen and (max-width: 600px) {
		text-indent: -9999px;
		padding-left: 0;
	}

	.site-name-text {
		line-height: 100%;

		.site-name-js {
			color: #5865f2;
		}
	}
}

.jac-theme-green {
	.jac-logo .site-name {
		background-image: url('/mint-icon.png');

		.site-name-text {

			.site-name-js {
				color: #57f287;
			}
		}
	}
}

.jac-theme-red {
	.jac-logo .site-name {
		background-image: url('/red-icon.png');

		.site-name-text {

			.site-name-js {
				color: #ed4245;
			}
		}
	}
}

.jac-theme-yellow {
	.jac-logo .site-name {
		background-image: url('/yellow-icon.png');

		.site-name-text {

			.site-name-js {
				color: #fee75c;
			}
		}
	}
}
</style>
