# packit / rules

## security

**1.1** a plugin that is **fully obfuscated** will be _rejected._

**1.2** must not contain **hidden actions** or execute **unknown arbitrary code** (e.g. `exec` from github). all actions must be transparent, or the plugin must justify this — store locally and not auto-update.

**1.3** must not be tied to a **private server** without explicit disclosure and transparency of actions.

**1.4** must not **collect personal data** of plugin users without their knowledge.

**1.5** all external libraries listed in `requirements` or `requires` must be justified by the plugin's functionality. **malicious or suspicious dependencies are prohibited.**

**1.6** must not include files in `assets` that are unreasonably large — could cause **memory overflow** or slow down the client.

**1.7** must correctly release resources and disable critical changes in `on_plugin_unload`, so that after being turned off **the application remains stable.**

**1.8** a plugin with **auto-update** (not _"update notification"_) must have an option in settings to **disable** auto-updates.

**1.9** must not contain any kind of malware: **stealers, RAT,** etc.

## quality

**2.1** must not be **obviously written by an AI** — at least clean up the comments.

**2.2** must not be an **exact copy** of an existing plugin, or differ only in minor changes.

**2.3** must be **completely free** — no premium or mixed models.

**2.4** must not be _useless_ or _extremely narrowly specialized._

**2.5** must not **violate licenses or copyrights** of other plugins.

**2.6** must have a **unique id.** recommended format: `{username}_{id}` _(not required)._

**2.7** must specify a correct `min_version`/`app_version`/`sdk_version`/`elyx_version` in metadata if the plugin depends on **specific features of newer versions** of elyxcore or the client.

**2.8** despite rule 2.3, links to **voluntary donations** are allowed in description or settings, _as long as they don't restrict basic functionality._

**2.9** must not **intentionally block** other plugins or disrupt their logic.

**2.10** any links inside the plugin must **not lead to phishing** resources or malware.
