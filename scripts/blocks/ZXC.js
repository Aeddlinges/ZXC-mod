const project1 = extendContent(OverdriveProjector, "boost", {
update(){
this.entity.health = Number.MAX_VALUE
}
});
project1.update = true;
project1.health = 900000000;