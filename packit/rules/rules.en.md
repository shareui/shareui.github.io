# packit / rules

## Security

**1.1** A plugin that **cannot be verified** will be _rejected._

**1.2** Must not contain **hidden actions** or execute **unknown arbitrary code** (e.g. `exec`, `eval`, dynamic `import` from the network). All actions must be transparent, or the plugin must justify this — store locally and not auto-update.

**1.3** Must not transmit **non-public data** from the client to external servers without clear justification.

**1.4** Must not **collect personal data** of plugin users without their consent. If collection is necessary — an explicit consent switch, **disabled by default,** is required.

**1.5** All external libraries listed in `requirements` or `requires` must be justified by the plugin's functionality. **Malicious or suspicious dependencies are prohibited.**

**1.6** Pip dependencies must specify a **fixed version** (e.g. `requests==2.31.0`). An exception applies to widely used and trusted general-purpose libraries (e.g. `numpy`, `pillow`, `aiohttp`), for which pinning the version is not required.

**1.7** Must not include files in `assets` whose size is not clearly justified by the plugin's functionality — padding size for no reason is not allowed.

**1.8** Must correctly release resources and disable critical changes in `on_plugin_unload`, so that after being turned off **the application remains stable.**

**1.9** A plugin with **auto-update** (not _"update notification"_) must have an option in settings to **disable** auto-updates.

**1.10** Must not contain any kind of malware: **stealers, RAT,** and other malicious actions are prohibited.

## Quality

**2.1** A plugin whose author does not understand how the code works is prohibited. The author must be able to understand and maintain the published plugin.

**2.2** Must not be an **exact copy** of an existing plugin, or differ only in minor changes.

**2.3** The plugin must be **completely free.** Functionality that requires the user to provide their own API keys for third-party paid services is allowed, as long as the plugin author **does not charge for it themselves.**

**2.4** **Catalog spam is prohibited:** plugins with no functional value, consisting of intentionally bloated but useless code, or duplicating built-in client features or existing plugins — are not accepted.

**2.5** Must not **violate licenses or copyrights** — including those of other plugins, libraries, and any third-party resources used within the plugin.

**2.6** Must have a **unique id.** Recommended format: `{username}_{id}` _(not required)._

**2.7** Must specify correct version constraints in metadata if the plugin depends on **specific features of newer versions** of SDK or the client.

**2.8** Despite rule 2.3, links to **voluntary donations** are allowed in description or settings, _as long as they don't restrict basic functionality._

**2.9** Must not block other plugins or disrupt their logic. If a conflict is unintentional — the author is expected to resolve it as a first priority.

**2.10** Any links inside the plugin must **not lead to phishing** resources or malware.

**2.11** Metadata must not **mislead the user** — the name and description must honestly reflect what the plugin does. For example, a plugin named _"Infinite Stars (not fake)"_ is not acceptable.

**2.12** The `__author__` field must not contain **someone else's name or username without their consent.** Exceptions: a fork with explicit credit to the original author, a collaboration, or other written agreement.

**2.13** The plugin must **deliver the functionality described.** The description must not exaggerate capabilities or promise features that are not implemented.

**2.14** If a plugin has **not been updated for more than 6 months** and has **lost compatibility** with current versions of the client, SDK, or its dependencies — it is subject to archival. If the plugin continues to work correctly, the absence of updates alone is not grounds for archival. If development resumes, the plugin can be unarchived.

## Special rules

**3.1** You may only publish **plugins you own the rights to** — including forks, provided the original license is respected.

**3.2** Once a plugin is installed from the catalog, the **user** — not the catalog — is responsible for any updates that occur **outside of PackIt** (e.g. built-in auto-updates within the plugin).

**3.3** If a plugin is **obfuscated, encrypted, or compiled** — it can be decompiled for inspection, even if the source code is available. The source code is not shared with third parties and is only available to the moderator.

**3.4** If the **rules are updated,** all plugins that no longer comply with them are subject to removal.

**3.5** The administration reserves the right to **reject a publication without explanation.**

**3.6** The source code provided for inspection is **strictly confidential** and is used only for security audits.

**3.7** The administration reserves the right to **make exceptions to the rules** by noting them in the tags.

**3.8** Moderation timeframes are **not regulated** and depend on the complexity of the code and the administrator's workload.
