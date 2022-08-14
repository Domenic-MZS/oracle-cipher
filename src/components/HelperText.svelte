<span class="helper-text">
	<img src="/group.png" class="helper-text__glyph" alt="!" aria-hidden="true" />
	<p class="helper-text__message"><slot /></p>
</span>

<style lang="scss">
	.helper-text {
		display: flex;
		align-items: center;

		&__glyph {
			width: 1.35rem;
		}

		&__glyph,
		&__message {
			display: inline-block;
			font-size: var(--fs-200);
			font-style: italic;
			padding: var(--size-100);
		}
	}
</style>
