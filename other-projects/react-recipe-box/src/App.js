import React, { Component } from 'react';
import { Accordion, Panel, Button, ButtonToolbar, Modal, FormGroup, ControlLabel, FormControl, Navbar } from 'react-bootstrap';

class App extends Component {

  state = {
    initrecipes: [
      { title: 'Tequila-Lime Pork Tenderloin', instr: ["Whisk together the lime juice, tequila, orange juice, cilantro, chiles, chili powder, garlic, honey, salt, and pepper in a large bowl; pour into a gallon-sized resealable bag; add the pork tenderloins; seal and store in refrigerator overnight.", "Preheat an outdoor grill for high heat and lightly oil grate.", "Cook the pork on the preheated grill, turning occasionally, until meat has reached an internal temperature of 145 degrees F (63 degrees C), about 20 minutes."], ingredients: ['1 cup fresh lime juice', '1/2 cup tequila', '1/2 cup orange juice', '1/4 cup chopped fresh cilantro', '2 tablespoons chopped green chiles', '1 1/2 tablespoons chili powder', '1 teaspoon minced garlic', '1 tablespoon honey', '1 teaspoon salt', '3/4 teaspoon ground black pepper', '2 pork tenderloins'], time: ["Prep 15m", "Cook 20m", "Ready In 8h35m"] },
      { title: 'Baked Buffalo Chicken Dip', instr: ["Preheat oven to 400 degrees F (200 degrees C).", "Combine chicken, cream cheese, hot pepper sauce, 1/2 cup pepper Jack cheese, blue cheese dressing, crumbled blue cheese, seafood seasoning, and cayenne pepper in a large bowl.", "Transfer chicken mixture to a 9-inch round baking dish and sprinkle with 2 tablespoons pepper Jack cheese.", "Bake until lightly browned, 15 to 20 minutes. Remove from oven and garnish with cayenne pepper."], ingredients: ['3 cups diced cooked rotisserie chicken', '2 (8 ounce) packages cream cheese, softened', '3/4 cup hot pepper sauce (such as Frank\'s RedHot®)', '1/2 cup shredded pepper Jack cheese', '1/2 cup blue cheese dressing', '1/2 cup crumbled blue cheese', '1/2 teaspoon seafood seasoning (such as Old Bay®)', '1 pinch cayenne pepper, or to taste', '2 tablespoons shredded pepper Jack cheese', '1 pinch cayenne pepper, for garnish'], time: ["Prep 15m", "Cook 15m", "Ready In 30m"] },
      { title: 'Chicken Parmesan', instr: ["Preheat an oven to 450 degrees F (230 degrees C).", "Place chicken breasts between two sheets of heavy plastic (resealable freezer bags work well) on a solid, level surface. Firmly pound chicken with the smooth side of a meat mallet to a thickness of 1/2-inch. Season chicken thoroughly with salt and pepper.", "Beat eggs in a shallow bowl and set aside.", "Mix bread crumbs and 1/2 cup Parmesan cheese in a separate bowl, set aside.", "Place flour in a sifter or strainer; sprinkle over chicken breasts, evenly coating both sides.", "Dip flour coated chicken breast in beaten eggs. Transfer breast to breadcrumb mixture, pressing the crumbs into both sides. Repeat for each breast. Set aside breaded chicken breasts for about 15 minutes.", "Heat 1 cup olive oil in a large skillet on medium-high heat until it begins to shimmer. Cook chicken until golden, about 2 minutes on each side. The chicken will finish cooking in the oven.", "Place chicken in a baking dish and top each breast with about 1/3 cup of tomato sauce. Layer each chicken breast with equal amounts of mozzarella cheese, fresh basil, and provolone cheese. Sprinkle 1 to 2 tablespoons of Parmesan cheese on top and drizzle with 1 tablespoon olive oil.", "Bake in the preheated oven until cheese is browned and bubbly, and chicken breasts are no longer pink in the center, 15 to 20 minutes. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C)."], ingredients: ['4 skinless, boneless chicken breast halves', 'salt and freshly ground black pepper to taste', '2 eggs', '1 cup panko bread crumbs, or more as needed', '1/2 cup grated Parmesan cheese', '2 tablespoons all-purpose flour, or more if needed', '1 cup olive oil for frying', '1/2 cup prepared tomato sauce', '1/4 cup fresh mozzarella, cut into small cubes', '1/4 cup chopped fresh basil', '1/2 cup grated provolone cheese', '1/4 cup grated Parmesan cheese', '1 tablespoon olive oil'], time: ["Prep 25m", " Cook 20m", "Ready In 1h"] }
    ],
    AddNewRec: false,
    EditRec: false,
    currInd: 0,
    recentRec: { title: "", instr: [], ingredients: [], time: [] }
  }

  deleteRecipe(i) {
    let initrecipes = this.state.initrecipes.slice();
    initrecipes.splice(i, 1);
    localStorage.setItem("_corysw_recipes", JSON.stringify(initrecipes));
    this.setState({ initrecipes });
  }

  updateNewRec(val, inst, ing, t) {
    this.setState({
      recentRec: { title: val, instr: inst, ingredients: ing, time: t }
    });
  }

  saveNewRec() {
    let initrecipes = this.state.initrecipes.slice();
    initrecipes.push({ title: this.state.recentRec.title, instr: this.state.recentRec.instr, ingredients: this.state.recentRec.ingredients, time: this.state.recentRec.time });
    localStorage.setItem("_corysw_recipes", JSON.stringify(initrecipes));
    this.setState({
      initrecipes,
      recentRec: { title: "", instr: [], ingredients: [], time: [] }
    });
    this.closeMod();
  }

  closeMod = () => {
    if (this.state.AddNewRec) {
      this.setState({
        AddNewRec: false
      })
    }
    if (this.state.EditRec) {
      this.setState({
        EditRec: false
      })
    }
  }

  openMod = (state, i) => {
    this.setState({
      [state]: true,
      currInd: i
    });
  }

  UpdateCurrTitle(recTitle, i) {
    let initrecipes = this.state.initrecipes.slice();
    initrecipes[i] = { title: recTitle, ingredients: initrecipes[i].ingredients, instr: initrecipes[i].instr, time: initrecipes[i].time };
    localStorage.setItem("_corysw_recipes", JSON.stringify(initrecipes));
    this.setState({ initrecipes });
  }

  UpdateCurrIng(recIng, i) {
    let initrecipes = this.state.initrecipes.slice();
    initrecipes[i] = { title: initrecipes[i].title, ingredients: recIng, instr: initrecipes[i].instr, time: initrecipes[i].time };
    localStorage.setItem("_corysw_recipes", JSON.stringify(initrecipes));
    this.setState({ initrecipes });
  }

  UpdateCurrInstr(recInstr, i) {
    let initrecipes = this.state.initrecipes.slice();
    initrecipes[i] = { title: initrecipes[i].title, ingredients: initrecipes[i].ingredients, instr: recInstr, time: initrecipes[i].time };
    localStorage.setItem("_corysw_recipes", JSON.stringify(initrecipes));
    this.setState({ initrecipes });
  }

  UpdateCurrT(recT, i) {
    let initrecipes = this.state.initrecipes.slice();
    initrecipes[i] = { title: initrecipes[i].title, ingredients: initrecipes[i].ingredients, instr: initrecipes[i].instr, time: recT };
    localStorage.setItem("_corysw_recipes", JSON.stringify(initrecipes));
    this.setState({ initrecipes });
  }

  componentDidMount() {
    let initrecipes = localStorage.getItem("_corysw_recipes");
    if (initrecipes) {
      this.setState({ initrecipes: JSON.parse(initrecipes) });
    }
    return;
  }


  render() {
    const { initrecipes, recentRec, currInd } = this.state;
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a>React Recipe Box !</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        {initrecipes.length > 0 && (
          <div className="container">
            <Accordion>
              {initrecipes.map((rec, i) => (
                <Panel header={rec.title} eventKey={i} key={i} >
                  <h1>Ingredients</h1>
                  <ul>
                    {rec.ingredients.map((ing) => (
                      <li key={ing}>{ing}</li>
                    ))}
                  </ul>
                  <h1>Instructions</h1>
                  <ol>
                    {rec.instr.map((ins) => (
                      <li key={ins}>{ins}</li>
                    ))}
                  </ol>
                  <h1>Time</h1>
                  {rec.time.map((T) => (
                    <p key={T}>{T}</p>
                  ))}
                  <ButtonToolbar>
                    <Button bsStyle="success" onClick={(e) => this.openMod("EditRec", i)}>Edit recipe</Button>
                    <Button bsStyle="danger" onClick={(e) => this.deleteRecipe(i)}>Delete recipe...</Button>
                  </ButtonToolbar>
                </Panel>
              ))}
            </Accordion>

            <Modal show={this.state.EditRec} onHide={this.closeMod}>
              <Modal.Header closeButton>
                <Modal.Title>Edit recipe</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Recipe Name</ControlLabel>
                  <FormControl type="text" value={initrecipes[currInd].title} placeholder="Enter text" onChange={(e) => this.UpdateCurrTitle(e.target.value, currInd)} />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Ingredients</ControlLabel>
                  <FormControl type="textarea" value={initrecipes[currInd].ingredients} onChange={(e) => this.UpdateCurrIng(e.target.value.split(","), currInd)} />
                </FormGroup>
                <FormGroup controlId="formBasicText">
                  <ControlLabel>Recipe Instructions</ControlLabel>
                  <FormControl type="text" value={initrecipes[currInd].instr} placeholder="Enter text" onChange={(e) => this.UpdateCurrInstr(e.target.value.split(","), currInd)} />
                </FormGroup>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Recipe Time</ControlLabel>
                  <FormControl type="textarea" value={initrecipes[currInd].time} onChange={(e) => this.UpdateCurrT(e.target.value.split(","), currInd)} />
                </FormGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.closeMod}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        )}


        <Modal show={this.state.AddNewRec} onHide={this.closeMod}>
          <Modal.Header closeButton>
            <Modal.Title>Add Recipe</Modal.Title>
            <Modal.Body>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Recipe Name</ControlLabel>
                <FormControl
                  type="text"
                  value={recentRec.title}
                  placeholder="Enter recipe name"
                  onChange={(e) => this.updateNewRec(e.target.value, recentRec.instr, recentRec.ingredients, recentRec.time)}
                ></FormControl>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Recipe Ingredients</ControlLabel>
                  <FormControl
                    type="textarea"
                    value={recentRec.ingredients}
                    placeholder="Enter Ingredients (Separate them using commas)"
                    onChange={(e) => this.updateNewRec(recentRec.title, recentRec.instr, e.target.value.split(","), recentRec.time)}>
                  </FormControl>
                </FormGroup>
              </FormGroup>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Recipe Instructions</ControlLabel>
                <FormControl
                  type="text"
                  value={recentRec.instr}
                  placeholder="Enter recipe instructions (separate using commas)"
                  onChange={(e) => this.updateNewRec(recentRec.title, e.target.value.split(","), recentRec.ingredients, recentRec.time)}
                ></FormControl>
                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Recipe Time</ControlLabel>
                  <FormControl
                    type="textarea"
                    value={recentRec.time}
                    placeholder="Enter recipe time"
                    onChange={(e) => this.updateNewRec(recentRec.title, recentRec.instr, recentRec.ingredients, e.target.value.split(","))}>
                  </FormControl>
                </FormGroup>
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeMod}>Close</Button>
              <Button onClick={this.saveNewRec.bind(this)} bsStyle="success">Save new recipe !</Button>
            </Modal.Footer>
          </Modal.Header>
        </Modal>

        <Button bsStyle="primary" onClick={(e) => { this.openMod("AddNewRec", currInd) }}>Add a new recipe !</Button>
      </div>
    );
  }
}

export default App;
