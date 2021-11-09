# Empathise

Empathise converts all the bare paths in your js imports into browser friendly paths. npm modules
typically use bare path specifiers for import urls. Node understands these - is uses a scanning
algorithm to locate the actual file to import. Browers don't and just 404 on them.

So, Empathise looks at the dependency section in your package.json, copies those directory trees from
node\_modules to an assets directory, and rewrites the bare paths along the way. The end result is
a trimmed tree of dependencies instead of shipping the full node\_modules directory, with the import
paths made browser compliant. A side effect of using Babels AST to perform the transforms is that the
resultant js files will be slightly different in formatting to the source. You typically wouldn't
commit those transformed js files to your revision control system.
