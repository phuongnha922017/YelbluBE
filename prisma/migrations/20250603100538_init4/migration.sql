/*
  Warnings:

  - Made the column `calories` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "calories" SET NOT NULL;

CREATE MATERIALIZED VIEW grouped_ingredients AS
SELECT
  it.id AS type_id,
  it.label AS type_label,
  json_agg(
    json_build_object(
      'id', i.id,
      'label', i.label
    )
  ) AS ingredients
FROM ingredient i
JOIN ingredienttype it ON i.ingredientTypeId = it.id
GROUP BY it.id, it.label;
