# packit / rules

## security

**1.1** a plugin that **cannot be verified** will be _rejected._

**1.2** must not contain **hidden actions** or execute **unknown arbitrary code** (e.g. `exec`, `eval`, dynamic `import` from the network). all actions must be transparent, or the plugin must justify this — store locally and not auto-update.

**1.3** must not transmit **sensitive data** from the client to external servers without clear justification.

**1.4** must not **collect personal data** of plugin users without their consent. if collection is necessary — an explicit consent switch, **disabled by default,** is required.

**1.5** all external libraries listed in `requirements` or `requires` must be justified by the plugin's functionality. **malicious or suspicious dependencies are prohibited.**

**1.6** must not include files in `assets` whose size is not clearly justified by the plugin's functionality — padding size for no reason is not allowed.

**1.7** must correctly release resources and disable critical changes in `on_plugin_unload`, so that after being turned off **the application remains stable.**

**1.8** a plugin with **auto-update** (not _"update notification"_) must have an option in settings to **disable** auto-updates.

**1.9** must not contain any kind of malware: **stealers, RAT,** and other malicious actions are prohibited.

## quality

**2.1** a plugin whose author does not understand how the code works is prohibited. the author must be able to understand and maintain the published plugin.

**2.2** must not be an **exact copy** of an existing plugin, or differ only in minor changes.

**2.3** must be **completely free** — no premium or mixed models.

**2.4** must solve a real problem for at least one group of users. **joke plugins are not accepted.**

**2.5** must not **violate licenses or copyrights** of other plugins.

**2.6** must have a **unique id.** recommended format: `{username}_{id}` _(not required)._

**2.7** must specify correct version constraints in metadata if the plugin depends on **specific features of newer versions** of elyxcore or the client.

**2.8** despite rule 2.3, links to **voluntary donations** are allowed in description or settings, _as long as they don't restrict basic functionality._

**2.9** must not block other plugins or disrupt their logic. if a conflict is unintentional — the author is expected to resolve it as a first priority.

**2.10** any links inside the plugin must **not lead to phishing** resources or malware.

**2.11** metadata must not **mislead the user** — the name and description must honestly reflect what the plugin does. for example, a plugin named _"Infinite Stars (not fake)"_ is not acceptable.

**2.12** the `__author__` field must not contain **someone else's name or username without their consent.** exceptions: a fork with explicit credit to the original author, a collaboration, or other written agreement.

**2.13** the plugin must **deliver the functionality described.** the description must not exaggerate capabilities or promise features that are not implemented.

## special rules

**3.1** you may only publish **plugins you own the rights to** — including forks, provided the original license is respected.

**3.2** if a plugin is **obfuscated, encrypted, or compiled** — it can be decompiled for inspection, even if the source code is available. the source code is not shared with third parties and is only available to the moderator.

**3.3** if the **rules are updated,** all plugins that no longer comply with them are subject to removal.

**3.4** the administration reserves the right to **reject a publication without explanation.**

**3.5** the source code provided for inspection is **strictly confidential** and is used only for security audits.

**3.6** the administration reserves the right to **make exceptions to the rules** by noting them in the tags.

**3.7** moderation timeframes are **not regulated** and depend on the complexity of the code and the administrator's workload.
