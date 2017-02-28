db.ingredients.update({
  unit: 'tbsp'
}, {$set: {
  unit: 'T'
}},
{multi:true}
)
