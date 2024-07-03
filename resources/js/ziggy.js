const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"debugbar.openhandler":{"uri":"_debugbar\/open","methods":["GET","HEAD"]},"debugbar.clockwork":{"uri":"_debugbar\/clockwork\/{id}","methods":["GET","HEAD"],"parameters":["id"]},"debugbar.assets.css":{"uri":"_debugbar\/assets\/stylesheets","methods":["GET","HEAD"]},"debugbar.assets.js":{"uri":"_debugbar\/assets\/javascript","methods":["GET","HEAD"]},"debugbar.cache.delete":{"uri":"_debugbar\/cache\/{key}\/{tags?}","methods":["DELETE"],"parameters":["key","tags"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"countries.index":{"uri":"{prefix?}\/countries","methods":["GET","HEAD"],"parameters":["prefix"]},"states.index":{"uri":"{prefix?}\/states","methods":["GET","HEAD"],"parameters":["prefix"]},"cities.index":{"uri":"{prefix?}\/cities","methods":["GET","HEAD"],"parameters":["prefix"]},"timezones.index":{"uri":"{prefix?}\/timezones","methods":["GET","HEAD"],"parameters":["prefix"]},"currencies.index":{"uri":"{prefix?}\/currencies","methods":["GET","HEAD"],"parameters":["prefix"]},"languages.index":{"uri":"{prefix?}\/languages","methods":["GET","HEAD"],"parameters":["prefix"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"forget.password.get":{"uri":"forget-password","methods":["GET","HEAD"]},"forget.password.post":{"uri":"forget-password","methods":["POST"]},"password.reset":{"uri":"reset-password\/{token}","methods":["GET","HEAD"],"parameters":["token"]},"password.store":{"uri":"reset-password","methods":["POST"]},"dashboard":{"uri":"dashboard","methods":["GET","HEAD"]},"profile.edit":{"uri":"profile-manage","methods":["GET","HEAD"]},"profileupdate":{"uri":"profile-manage","methods":["POST"]},"change.password":{"uri":"change-password","methods":["GET","HEAD"]},"change.passwordupdate":{"uri":"change-password","methods":["POST"]},"category.index":{"uri":"category","methods":["GET","HEAD"]},"category.create":{"uri":"category\/create","methods":["GET","HEAD"]},"category.store":{"uri":"category","methods":["POST"]},"category.show":{"uri":"category\/{category}","methods":["GET","HEAD"],"parameters":["category"],"bindings":{"category":"id"}},"category.edit":{"uri":"category\/{category}\/edit","methods":["GET","HEAD"],"parameters":["category"],"bindings":{"category":"id"}},"category.update":{"uri":"category\/{category}","methods":["PUT","PATCH"],"parameters":["category"],"bindings":{"category":"id"}},"category.destroy":{"uri":"category\/{category}","methods":["DELETE"],"parameters":["category"],"bindings":{"category":"id"}},"category.trash":{"uri":"trash","methods":["GET","HEAD"]},"category.restore":{"uri":"category\/{id}\/restore","methods":["PATCH"],"parameters":["id"]},"category.delete":{"uri":"category\/{id}\/delete","methods":["DELETE"],"parameters":["id"]},"subcategory.index":{"uri":"subcategory","methods":["GET","HEAD"]},"subcategory.create":{"uri":"subcategory\/create","methods":["GET","HEAD"]},"subcategory.store":{"uri":"subcategory","methods":["POST"]},"subcategory.show":{"uri":"subcategory\/{subcategory}","methods":["GET","HEAD"],"parameters":["subcategory"],"bindings":{"subcategory":"id"}},"subcategory.edit":{"uri":"subcategory\/{subcategory}\/edit","methods":["GET","HEAD"],"parameters":["subcategory"],"bindings":{"subcategory":"id"}},"subcategory.update":{"uri":"subcategory\/{subcategory}","methods":["PUT","PATCH"],"parameters":["subcategory"],"bindings":{"subcategory":"id"}},"subcategory.destroy":{"uri":"subcategory\/{subcategory}","methods":["DELETE"],"parameters":["subcategory"],"bindings":{"subcategory":"id"}},"subcategory.trash":{"uri":"subcat-trash","methods":["GET","HEAD"]},"subcategory.restore":{"uri":"subcategory\/{id}\/restore","methods":["PATCH"],"parameters":["id"]},"subcategory.delete":{"uri":"subcategory\/{id}\/delete","methods":["DELETE"],"parameters":["id"]},"childcat.index":{"uri":"childcat","methods":["GET","HEAD"]},"childcat.create":{"uri":"childcat\/create","methods":["GET","HEAD"]},"childcat.store":{"uri":"childcat","methods":["POST"]},"childcat.show":{"uri":"childcat\/{childcat}","methods":["GET","HEAD"],"parameters":["childcat"],"bindings":{"childcat":"id"}},"childcat.edit":{"uri":"childcat\/{childcat}\/edit","methods":["GET","HEAD"],"parameters":["childcat"],"bindings":{"childcat":"id"}},"childcat.update":{"uri":"childcat\/{childcat}","methods":["PUT","PATCH"],"parameters":["childcat"],"bindings":{"childcat":"id"}},"childcat.destroy":{"uri":"childcat\/{childcat}","methods":["DELETE"],"parameters":["childcat"],"bindings":{"childcat":"id"}},"childcat.trash":{"uri":"child-trash","methods":["GET","HEAD"]},"childcat.restore":{"uri":"childcat\/{id}\/restore","methods":["PATCH"],"parameters":["id"]},"childcat.delete":{"uri":"childcat\/{id}\/delete","methods":["DELETE"],"parameters":["id"]},"subchildcat.index":{"uri":"subchildcat","methods":["GET","HEAD"]},"subchildcat.create":{"uri":"subchildcat\/create","methods":["GET","HEAD"]},"subchildcat.store":{"uri":"subchildcat","methods":["POST"]},"subchildcat.show":{"uri":"subchildcat\/{subchildcat}","methods":["GET","HEAD"],"parameters":["subchildcat"],"bindings":{"subchildcat":"id"}},"subchildcat.edit":{"uri":"subchildcat\/{subchildcat}\/edit","methods":["GET","HEAD"],"parameters":["subchildcat"],"bindings":{"subchildcat":"id"}},"subchildcat.update":{"uri":"subchildcat\/{subchildcat}","methods":["PUT","PATCH"],"parameters":["subchildcat"],"bindings":{"subchildcat":"id"}},"subchildcat.destroy":{"uri":"subchildcat\/{subchildcat}","methods":["DELETE"],"parameters":["subchildcat"],"bindings":{"subchildcat":"id"}},"subchildcat.trash":{"uri":"subchild-trash","methods":["GET","HEAD"]},"subchildcat.restore":{"uri":"subchildcat\/{id}\/restore","methods":["PATCH"],"parameters":["id"]},"subchildcat.delete":{"uri":"subchildcat\/{id}\/delete","methods":["DELETE"],"parameters":["id"]},"roles.index":{"uri":"roles","methods":["GET","HEAD"]},"roles.create":{"uri":"roles\/create","methods":["GET","HEAD"]},"roles.store":{"uri":"roles","methods":["POST"]},"roles.show":{"uri":"roles\/{role}","methods":["GET","HEAD"],"parameters":["role"]},"roles.edit":{"uri":"roles\/{role}\/edit","methods":["GET","HEAD"],"parameters":["role"]},"roles.update":{"uri":"roles\/{role}","methods":["PUT","PATCH"],"parameters":["role"]},"roles.destroy":{"uri":"roles\/{role}","methods":["DELETE"],"parameters":["role"]},"roles.trash":{"uri":"roletrash","methods":["GET","HEAD"]},"roles.restore":{"uri":"role\/{id}\/restore","methods":["PATCH"],"parameters":["id"]},"roles.delete":{"uri":"role\/{id}\/delete","methods":["DELETE"],"parameters":["id"]},"users.index":{"uri":"users","methods":["GET","HEAD"]},"users.create":{"uri":"users\/create","methods":["GET","HEAD"]},"users.store":{"uri":"users","methods":["POST"]},"users.show":{"uri":"users\/{user}","methods":["GET","HEAD"],"parameters":["user"]},"users.edit":{"uri":"users\/{user}\/edit","methods":["GET","HEAD"],"parameters":["user"]},"users.update":{"uri":"users\/{user}","methods":["PUT","PATCH"],"parameters":["user"]},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"parameters":["user"]},"users.trash":{"uri":"usertrash","methods":["GET","HEAD"]},"users.restore":{"uri":"user\/{id}\/restore","methods":["PATCH"],"parameters":["id"]},"users.delete":{"uri":"user\/{id}\/delete","methods":["DELETE"],"parameters":["id"]},"changeStatus":{"uri":"changeStatus\/{id}","methods":["PUT"],"parameters":["id"]},"mark-as-read":{"uri":"mark-as-read","methods":["GET","HEAD"]},"permissions.index":{"uri":"permissions","methods":["GET","HEAD"]},"permissions.create":{"uri":"permissions\/create","methods":["GET","HEAD"]},"permissions.store":{"uri":"permissions","methods":["POST"]},"permissions.show":{"uri":"permissions\/{permission}","methods":["GET","HEAD"],"parameters":["permission"]},"permissions.edit":{"uri":"permissions\/{permission}\/edit","methods":["GET","HEAD"],"parameters":["permission"]},"permissions.update":{"uri":"permissions\/{permission}","methods":["PUT","PATCH"],"parameters":["permission"]},"permissions.destroy":{"uri":"permissions\/{permission}","methods":["DELETE"],"parameters":["permission"],"bindings":{"permission":"id"}},"permissions.trash":{"uri":"pertrash","methods":["GET","HEAD"]},"permissions.restore":{"uri":"permissions\/{id}\/restore","methods":["PATCH"],"parameters":["id"]},"permissions.delete":{"uri":"permissions\/{id}\/delete","methods":["DELETE"],"parameters":["id"]},"package.index":{"uri":"package","methods":["GET","HEAD"]},"package.create":{"uri":"package\/create","methods":["GET","HEAD"]},"package.store":{"uri":"package","methods":["POST"]},"package.show":{"uri":"package\/{package}","methods":["GET","HEAD"],"parameters":["package"],"bindings":{"package":"id"}},"package.edit":{"uri":"package\/{package}\/edit","methods":["GET","HEAD"],"parameters":["package"],"bindings":{"package":"id"}},"package.update":{"uri":"package\/{package}","methods":["PUT","PATCH"],"parameters":["package"],"bindings":{"package":"id"}},"package.destroy":{"uri":"package\/{package}","methods":["DELETE"],"parameters":["package"],"bindings":{"package":"id"}},"package.trash":{"uri":"pkgtrash","methods":["GET","HEAD"]},"package.restore":{"uri":"package\/{id}\/restore","methods":["PATCH"],"parameters":["id"]},"package.delete":{"uri":"package\/{id}\/delete","methods":["DELETE"],"parameters":["id"]},"change.lang":{"uri":"lang\/change","methods":["GET","HEAD"]},"register":{"uri":"register","methods":["GET","HEAD"]},"login":{"uri":"login","methods":["GET","HEAD"]},"password.request":{"uri":"forgot-password","methods":["GET","HEAD"]},"password.email":{"uri":"forgot-password","methods":["POST"]},"verification.notice":{"uri":"verify-email","methods":["GET","HEAD"]},"verification.verify":{"uri":"verify-email\/{id}\/{hash}","methods":["GET","HEAD"],"parameters":["id","hash"]},"verification.send":{"uri":"email\/verification-notification","methods":["POST"]},"password.confirm":{"uri":"confirm-password","methods":["GET","HEAD"]},"password.update":{"uri":"password","methods":["PUT"]},"logout":{"uri":"logout","methods":["POST"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
