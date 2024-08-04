<ul>
	<li><?= site()->link()->toLinkObject()->tag() ?></li>
	<li>
		<ul>
			<?php foreach (site()->structure()->toStructure() as $entry) : ?>
				<li><?= $entry->legacyLink()->toLinkObject()->tag() ?></li>
			<?php endforeach ?>
		</ul>
	</li>
	<li>
		<ul>
			<?php foreach (site()->blocks()->toBlocks() as $block) : ?>
				<li><?= $block->legacyLink()->toLinkObject()->tag() ?></li>
			<?php endforeach ?>
		</ul>
	</li>
</ul>