
class Ingredient {
    constructor(name,measure) {
      this.name = name
      this.measure = measure
    }
}
  
class Meal {  
    constructor(name,category,area,instructions,thubnail) {
        this.name = name
        this.category = category
        this.area = area
        this.instructions = instructions
        this.thubnail = thubnail
  
        this.ingredients = []
        this.tags = []
    }
    AddTag(tag) {
        this.tags.push(tag)
    }
    AddIngredient(ingredient) {
        this.ingredients.push(ingredient)
    }
}

function jsontomeal(jsonobject) {
    const {
        strMeal: name, 
        strCategory: category,
        strArea: area,
        strInstructions: instructions,
        strThumbnail: thumbnail,
        strTags
    } = jsonobject //destructuring
    const meal = new Meal(name, category, area, instructions, thumbnail)
    
    if (strTags) {
        const tags = strTags.split(",")
        for(const tag of tags){
          meal.AddTag(tag)
        }
      }
    
    //console.log(meal)
    return meal
}
