-- This is an empty migration.
CREATE MATERIALIZED VIEW "GroupedIngredient" AS
SELECT
  it."id" AS "typeId",
  it."label" AS "typeLabel",
  json_agg(
    json_build_object(
      'ingredientId', i."id",
      'ingredientLabel', i."label"
    )
  ) AS "ingredients"
FROM "Ingredient" i
JOIN "IngredientType" it ON i."ingredientTypeId" = it."id"
GROUP BY it."id", it."label";