# packit / rules

## security

**1.1** a plugin that is fully obfuscated will be rejected.

**1.2** must not contain hidden actions or execute unknown arbitrary code (e.g. exec from github). all actions must be transparent, or the plugin must justify this — store locally and not auto-update.

**1.3** must not be tied to a private server without explicit disclosure and transparency of actions.

**1.4** must not collect personal data of plugin users without their knowledge.

**1.5** all external libraries listed in requirements or requires must be justified by the plugin's functionality. malicious or suspicious dependencies are prohibited.

**1.6** the plugin must not include files in the assets folder that are unreasonably large and could cause device memory overflow or slow down the client.

**1.7** the plugin must correctly release resources and disable critical changes in `on_plugin_unload`, so that after it is turned off the application remains stable.

**1.8** a plugin with auto-update (not "update notification") must have an option in settings to disable auto-updates.

**1.9** the plugin must not contain any kind of malware: stealers, RAT, etc.

## quality

**2.1** the plugin must not be obviously written by an AI — at least clean up the comments.

**2.2** the plugin must not be an exact copy of an existing plugin, or differ only in minor changes.

**2.3** the plugin must be completely free (no premium or mixed models).

**2.4** the plugin must not be useless or extremely narrowly specialized.

**2.5** the plugin must not violate licenses or copyrights of other plugins.

**2.6** a new plugin must have a unique id. recommended format: `{username}_{id}` (not required).

**2.7** the developer must specify a correct `min_version` in metadata if the plugin depends on specific features of newer versions of elyxcore or the client.

**2.8** despite rule 2.3, the developer may leave links to voluntary donations in the description or settings, as long as this does not restrict the plugin's basic functionality.

**2.9** the plugin must not intentionally block other plugins or disrupt their logic.

**2.10** any links inside the plugin (buttons, logs) must not lead to phishing resources or malware.
