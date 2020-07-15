# Migration `20200715180355-user`

This migration has been generated by Guiradi at 7/15/2020, 6:03:55 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `sempapp`.`User` (
`email` varchar(191) NOT NULL  ,
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191)   ,
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE UNIQUE INDEX `User.email` ON `sempapp`.`User`(`email`)

DROP TABLE `sempapp`.`_migration`;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200715180355-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id    Int     @id @default(autoincrement())
+  email String  @unique
+  name  String? // ? significa opcional
+}
```

