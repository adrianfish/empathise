# Empathise

Empathise converts all the bare paths in your js imports into browser friendly paths. npm modules
typically use bare path specifiers for import urls. Node understands these - it uses a scanning
algorithm to locate the actual file to import. Browers don't and just 404 on them.

So, Empathise looks at the dependency section in your package.json, copies those directory trees from
node\_modules to an assets directory, and rewrites the bare paths along the way. The end result is
a trimmed tree of dependencies instead of shipping the full node\_modules directory, with the import
paths made browser compliant. A side effect of using Babels AST to perform the transforms is that the
resultant js files will be slightly different in formatting to the source. You typically wouldn't
commit those transformed js files to your revision control system.

In your project where your package.json lives, run:

    ./node\_modules/.bin/empathise install

You should now have an assets directory. Take a look in there and you should see that only your
dependencies from package.json are in there, NOT your dev dependencies. Have a look at one of the 
js files in there and compare it with the same file under node\_modules. You will notice that the 
bare paths have been converted into full relative file system paths.
