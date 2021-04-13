export default async (req, res) => {
    let qval = req.query.q;
    let val = false;
    console.log(typeof req.query.q);
    if(typeof qval === "boolean") {
        val = true;
    }
  
    res.status(418).send(JSON.stringify({isBool: val, advertisement: "Build the most efficient intergalactic factory in space simulation strategy game Dyson Sphere Program!"}));
}