import { Row, Col, Carousel } from "antd";

import { MainLayout } from "../components/MainLayout";
import FoodAndDrinkDetail from "../components/FoodAndDrink/FoodAndDrinkDetail";
import FoodAndDrinkList from "../components/FoodAndDrink/FoodAndDrinkList";
import SearchAndFilterFoodAndDrink from "../components/FoodAndDrink/SearchAndFilterFoodAndDrink";

export const FoodDrink = () => {
  const carouselStyle = {
    backgroundImage:
      "linear-gradient(to top, transparent 15px, rgba(253, 126, 20, 0.5) 15px, transparent 75px)",
  };
  const items = [
    {
      title: "Sed eu eros.",
      name: "primis",
      description:
        "facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel,",
      rate: 2,
      price: 132,
      id: 12345,
    },
    {
      title: "nec ligula consectetuer",
      name: "odio. Nam",
      description:
        "auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum",
      rate: 4,
      price: 325,
      id: 12378,
    },
    {
      title: "luctus vulputate,",
      name: "rhoncus id,",
      description:
        "dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin",
      rate: 5,
      price: 646,
      id: 12411,
    },
    {
      title: "nec urna et",
      name: "luctus aliquet",
      description:
        "blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit.",
      rate: 5,
      price: 254,
      id: 12444,
    },
    {
      title: "dolor sit amet, consectetuer",
      name: "eu",
      description:
        "libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum.",
      rate: 2,
      price: 293,
      id: 12477,
    },
    {
      title: "et netus",
      name: "nonummy ultricies",
      description:
        "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem",
      rate: 5,
      price: 185,
      id: 12510,
    },
    {
      title: "nisl sem, consequat",
      name: "tempor erat neque",
      description:
        "Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel,",
      rate: 2,
      price: 461,
      id: 12543,
    },
    {
      title: "Duis gravida. Praesent eu nulla",
      name: "adipiscing non,",
      description:
        "tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      rate: 2,
      price: 526,
      id: 12576,
    },
    {
      title: "in lobortis",
      name: "dui quis",
      description:
        "sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras",
      rate: 3,
      price: 113,
      id: 12609,
    },
    {
      title: "ipsum ac mi",
      name: "orci. Phasellus dapibus",
      description:
        "adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a",
      rate: 2,
      price: 601,
      id: 12642,
    },
    {
      title: "scelerisque scelerisque dui. Suspendisse",
      name: "arcu ac",
      description:
        "non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend",
      rate: 5,
      price: 327,
      id: 12675,
    },
    {
      title: "pede, malesuada",
      name: "pede, ultrices a,",
      description:
        "Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus.",
      rate: 5,
      price: 480,
      id: 12708,
    },
    {
      title: "lectus rutrum urna, nec luctus",
      name: "et nunc. Quisque",
      description:
        "pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et",
      rate: 1,
      price: 347,
      id: 12741,
    },
    {
      title: "dignissim pharetra. Nam",
      name: "turpis. In",
      description:
        "Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor",
      rate: 3,
      price: 233,
      id: 12774,
    },
    {
      title: "pede. Suspendisse",
      name: "Quisque nonummy",
      description:
        "ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et",
      rate: 2,
      price: 477,
      id: 12807,
    },
    {
      title: "Etiam bibendum fermentum",
      name: "arcu",
      description:
        "Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam",
      rate: 4,
      price: 354,
      id: 12840,
    },
    {
      title: "lacus. Quisque purus sapien, gravida",
      name: "ultrices, mauris ipsum",
      description:
        "mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget",
      rate: 5,
      price: 429,
      id: 12873,
    },
    {
      title: "erat vitae risus. Duis a",
      name: "Donec at",
      description:
        "luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae",
      rate: 5,
      price: 137,
      id: 12906,
    },
    {
      title: "scelerisque sed, sapien. Nunc",
      name: "ipsum dolor",
      description:
        "enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet",
      rate: 2,
      price: 391,
      id: 12939,
    },
    {
      title: "nec, imperdiet nec,",
      name: "Sed",
      description:
        "et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum.",
      rate: 4,
      price: 110,
      id: 12972,
    },
    {
      title: "arcu. Vestibulum",
      name: "eu metus. In",
      description:
        "posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et",
      rate: 5,
      price: 638,
      id: 13005,
    },
    {
      title: "dictum augue",
      name: "vestibulum nec, euismod",
      description:
        "diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus,",
      rate: 3,
      price: 641,
      id: 13038,
    },
    {
      title: "odio a",
      name: "Phasellus at",
      description:
        "habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus.",
      rate: 4,
      price: 248,
      id: 13071,
    },
    {
      title: "torquent per",
      name: "a mi",
      description:
        "egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean",
      rate: 5,
      price: 145,
      id: 13104,
    },
    {
      title: "consequat purus. Maecenas libero est,",
      name: "egestas.",
      description:
        "convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis",
      rate: 4,
      price: 306,
      id: 13137,
    },
    {
      title: "sapien. Aenean massa. Integer vitae",
      name: "sed, sapien. Nunc",
      description:
        "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis.",
      rate: 1,
      price: 219,
      id: 13170,
    },
    {
      title: "auctor vitae, aliquet nec, imperdiet",
      name: "non,",
      description:
        "dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis",
      rate: 4,
      price: 393,
      id: 13203,
    },
    {
      title: "non, lacinia at, iaculis",
      name: "Praesent eu",
      description:
        "viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius.",
      rate: 2,
      price: 470,
      id: 13236,
    },
    {
      title: "vestibulum nec,",
      name: "Cras lorem",
      description:
        "non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam",
      rate: 5,
      price: 376,
      id: 13269,
    },
    {
      title: "nec orci. Donec",
      name: "Phasellus vitae",
      description:
        "dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec",
      rate: 4,
      price: 436,
      id: 13302,
    },
    {
      title: "odio. Aliquam vulputate",
      name: "vel sapien",
      description:
        "ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna.",
      rate: 2,
      price: 527,
      id: 13335,
    },
    {
      title: "ornare, elit",
      name: "sagittis placerat.",
      description:
        "vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse",
      rate: 4,
      price: 485,
      id: 13368,
    },
    {
      title: "a, malesuada id, erat.",
      name: "Aliquam",
      description:
        "ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque",
      rate: 5,
      price: 611,
      id: 13401,
    },
    {
      title: "ipsum. Suspendisse sagittis. Nullam",
      name: "Aenean",
      description:
        "gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum.",
      rate: 5,
      price: 390,
      id: 13434,
    },
    {
      title: "ac mi",
      name: "lobortis ultrices. Vivamus",
      description:
        "diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus",
      rate: 4,
      price: 491,
      id: 13467,
    },
    {
      title: "sociis natoque penatibus et",
      name: "Duis",
      description:
        "risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla.",
      rate: 4,
      price: 546,
      id: 13500,
    },
    {
      title: "quam. Pellentesque habitant",
      name: "Nullam feugiat",
      description:
        "dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris",
      rate: 5,
      price: 413,
      id: 13533,
    },
    {
      title: "vitae velit",
      name: "mollis.",
      description:
        "orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat",
      rate: 3,
      price: 128,
      id: 13566,
    },
    {
      title: "Mauris blandit enim",
      name: "Cras",
      description:
        "ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis",
      rate: 3,
      price: 628,
      id: 13599,
    },
    {
      title: "eget, volutpat ornare,",
      name: "eros. Nam",
      description:
        "vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui",
      rate: 5,
      price: 451,
      id: 13632,
    },
    {
      title: "ut, pellentesque eget, dictum placerat,",
      name: "rutrum",
      description:
        "malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus.",
      rate: 2,
      price: 240,
      id: 13665,
    },
    {
      title: "tempus mauris erat eget ipsum.",
      name: "orci",
      description:
        "in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec",
      rate: 4,
      price: 527,
      id: 13698,
    },
    {
      title: "accumsan convallis, ante lectus convallis",
      name: "ante",
      description:
        "mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris",
      rate: 1,
      price: 175,
      id: 13731,
    },
    {
      title: "feugiat non, lobortis quis,",
      name: "non sapien molestie",
      description:
        "Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam",
      rate: 4,
      price: 665,
      id: 13764,
    },
    {
      title: "luctus vulputate, nisi",
      name: "viverra.",
      description:
        "mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu,",
      rate: 4,
      price: 131,
      id: 13797,
    },
    {
      title: "velit. Aliquam nisl. Nulla",
      name: "Nullam velit",
      description:
        "Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque",
      rate: 2,
      price: 268,
      id: 13830,
    },
    {
      title: "sollicitudin commodo ipsum. Suspendisse",
      name: "nibh.",
      description:
        "Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui",
      rate: 2,
      price: 420,
      id: 13863,
    },
    {
      title: "nonummy ipsum",
      name: "Vivamus",
      description:
        "torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at",
      rate: 1,
      price: 344,
      id: 13896,
    },
    {
      title: "nunc nulla",
      name: "consequat",
      description:
        "litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper,",
      rate: 1,
      price: 586,
      id: 13929,
    },
    {
      title: "porta elit, a",
      name: "sit amet metus.",
      description:
        "et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a",
      rate: 5,
      price: 282,
      id: 13962,
    },
    {
      title: "fermentum fermentum arcu.",
      name: "mi eleifend",
      description:
        "porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed,",
      rate: 5,
      price: 402,
      id: 13995,
    },
    {
      title: "neque tellus, imperdiet non,",
      name: "neque.",
      description:
        "ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque",
      rate: 3,
      price: 502,
      id: 14028,
    },
    {
      title: "id risus quis",
      name: "lorem fringilla",
      description:
        "lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus",
      rate: 2,
      price: 536,
      id: 14061,
    },
    {
      title: "enim non nisi.",
      name: "blandit enim consequat",
      description:
        "massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu",
      rate: 5,
      price: 496,
      id: 14094,
    },
    {
      title: "nec enim.",
      name: "Suspendisse non",
      description:
        "Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed",
      rate: 4,
      price: 533,
      id: 14127,
    },
    {
      title: "nisl sem, consequat",
      name: "quam",
      description:
        "arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper",
      rate: 1,
      price: 440,
      id: 14160,
    },
    {
      title: "lorem, luctus",
      name: "Proin",
      description:
        "leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut odio",
      rate: 5,
      price: 550,
      id: 14193,
    },
    {
      title: "Integer id magna",
      name: "nisi sem semper",
      description:
        "neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna.",
      rate: 1,
      price: 130,
      id: 14226,
    },
    {
      title: "lectus quis massa. Mauris",
      name: "libero mauris,",
      description:
        "sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam vel arcu. Curabitur ut",
      rate: 5,
      price: 654,
      id: 14259,
    },
    {
      title: "ac nulla. In tincidunt",
      name: "ultrices iaculis odio.",
      description:
        "orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer",
      rate: 2,
      price: 501,
      id: 14292,
    },
    {
      title: "tristique ac, eleifend vitae, erat.",
      name: "vitae,",
      description:
        "condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc",
      rate: 3,
      price: 637,
      id: 14325,
    },
    {
      title: "non dui nec urna",
      name: "lobortis",
      description:
        "ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam",
      rate: 4,
      price: 495,
      id: 14358,
    },
    {
      title: "lacus. Etiam bibendum",
      name: "mollis. Duis",
      description:
        "justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
      rate: 1,
      price: 143,
      id: 14391,
    },
    {
      title: "in molestie",
      name: "elementum at,",
      description:
        "imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue",
      rate: 1,
      price: 116,
      id: 14424,
    },
    {
      title: "feugiat metus sit amet",
      name: "Nulla aliquet.",
      description:
        "at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis",
      rate: 4,
      price: 518,
      id: 14457,
    },
    {
      title: "consectetuer, cursus et, magna.",
      name: "massa. Mauris vestibulum,",
      description:
        "ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut",
      rate: 4,
      price: 631,
      id: 14490,
    },
    {
      title: "massa. Mauris vestibulum,",
      name: "scelerisque, lorem",
      description:
        "ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget",
      rate: 2,
      price: 251,
      id: 14523,
    },
    {
      title: "pede ac urna.",
      name: "eu,",
      description:
        "ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu.",
      rate: 4,
      price: 252,
      id: 14556,
    },
    {
      title: "nulla. Cras eu",
      name: "et risus. Quisque",
      description:
        "felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed",
      rate: 5,
      price: 117,
      id: 14589,
    },
    {
      title: "Cras lorem lorem, luctus",
      name: "elit,",
      description:
        "vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci,",
      rate: 2,
      price: 654,
      id: 14622,
    },
    {
      title: "natoque penatibus et magnis dis",
      name: "eu, euismod",
      description:
        "metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non",
      rate: 5,
      price: 358,
      id: 14655,
    },
    {
      title: "congue, elit sed consequat auctor,",
      name: "neque. Nullam",
      description:
        "nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum",
      rate: 3,
      price: 273,
      id: 14688,
    },
    {
      title: "cubilia Curae; Phasellus",
      name: "ligula.",
      description:
        "non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat.",
      rate: 3,
      price: 584,
      id: 14721,
    },
    {
      title: "Aliquam gravida mauris ut",
      name: "Nullam nisl.",
      description:
        "et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,",
      rate: 2,
      price: 299,
      id: 14754,
    },
    {
      title: "feugiat placerat",
      name: "turpis. Aliquam adipiscing",
      description:
        "Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu,",
      rate: 1,
      price: 163,
      id: 14787,
    },
    {
      title: "velit. Quisque varius. Nam porttitor",
      name: "in",
      description:
        "vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy.",
      rate: 4,
      price: 306,
      id: 14820,
    },
    {
      title: "Sed pharetra, felis",
      name: "nunc",
      description:
        "odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis",
      rate: 2,
      price: 305,
      id: 14853,
    },
    {
      title: "egestas. Sed pharetra,",
      name: "sem semper erat,",
      description:
        "lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula.",
      rate: 1,
      price: 285,
      id: 14886,
    },
    {
      title: "lobortis quis, pede. Suspendisse",
      name: "amet",
      description:
        "sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora",
      rate: 5,
      price: 318,
      id: 14919,
    },
    {
      title: "dictum. Proin",
      name: "Duis ac",
      description:
        "dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
      rate: 3,
      price: 624,
      id: 14952,
    },
    {
      title: "dolor. Fusce mi lorem,",
      name: "aliquet,",
      description:
        "ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non,",
      rate: 5,
      price: 300,
      id: 14985,
    },
    {
      title: "Mauris ut quam vel sapien",
      name: "ligula. Aenean",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque",
      rate: 5,
      price: 92,
      id: 15018,
    },
    {
      title: "molestie dapibus ligula. Aliquam erat",
      name: "eu, ligula.",
      description:
        "ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada",
      rate: 4,
      price: 529,
      id: 15051,
    },
    {
      title: "rutrum. Fusce dolor quam,",
      name: "augue ac ipsum.",
      description:
        "ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus.",
      rate: 4,
      price: 225,
      id: 15084,
    },
    {
      title: "eu, placerat eget, venenatis",
      name: "In faucibus.",
      description:
        "ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam",
      rate: 4,
      price: 307,
      id: 15117,
    },
    {
      title: "purus, accumsan interdum",
      name: "malesuada",
      description:
        "vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus.",
      rate: 2,
      price: 458,
      id: 15150,
    },
    {
      title: "Aliquam erat volutpat. Nulla facilisis.",
      name: "porttitor",
      description:
        "Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo.",
      rate: 3,
      price: 171,
      id: 15183,
    },
    {
      title: "semper tellus id nunc interdum",
      name: "Integer",
      description:
        "nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo",
      rate: 3,
      price: 109,
      id: 15216,
    },
    {
      title: "netus et malesuada",
      name: "aliquet. Phasellus fermentum",
      description:
        "In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus",
      rate: 2,
      price: 103,
      id: 15249,
    },
    {
      title: "convallis, ante",
      name: "hendrerit a,",
      description:
        "nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam",
      rate: 5,
      price: 542,
      id: 15282,
    },
    {
      title: "placerat eget, venenatis a,",
      name: "massa. Integer vitae",
      description:
        "est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed",
      rate: 5,
      price: 562,
      id: 15315,
    },
    {
      title: "eu arcu. Morbi",
      name: "amet, consectetuer",
      description:
        "turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies",
      rate: 2,
      price: 483,
      id: 15348,
    },
    {
      title: "Aenean euismod mauris eu",
      name: "Duis a mi",
      description:
        "arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
      rate: 1,
      price: 135,
      id: 15381,
    },
    {
      title: "quam, elementum at,",
      name: "id,",
      description:
        "tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis.",
      rate: 2,
      price: 324,
      id: 15414,
    },
    {
      title: "Fusce feugiat.",
      name: "parturient montes, nascetur",
      description:
        "Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac",
      rate: 3,
      price: 183,
      id: 15447,
    },
    {
      title: "scelerisque sed, sapien.",
      name: "Phasellus in felis.",
      description:
        "auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing",
      rate: 5,
      price: 443,
      id: 15480,
    },
    {
      title: "non, dapibus rutrum, justo. Praesent",
      name: "eu sem.",
      description:
        "metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi",
      rate: 2,
      price: 264,
      id: 15513,
    },
    {
      title: "adipiscing, enim mi tempor",
      name: "felis.",
      description:
        "nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor",
      rate: 5,
      price: 480,
      id: 15546,
    },
    {
      title: "Donec elementum, lorem",
      name: "adipiscing lacus. Ut",
      description:
        "libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam",
      rate: 1,
      price: 203,
      id: 15579,
    },
    {
      title: "quis accumsan convallis, ante",
      name: "ipsum leo",
      description:
        "metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi",
      rate: 3,
      price: 109,
      id: 15612,
    },
  ];
  const itemsElements = items.slice(0, 12).map((item) => {
    return (
      <FoodAndDrinkDetail
        key={item.id}
        imageLocation="/victuals/poke.png"
        title={item.title}
        name={item.name}
        description={item.description}
        price={item.price}
        time={item.time}
        rate={item.rate}
      />
    );
  });
  console.log(itemsElements);
  return (
    <Row>
      <Col>
        <SearchAndFilterFoodAndDrink />
      </Col>
      <Col className={`d-block`}>
        {/* PLEASE FIX THIS BUG PLEASE BBBEEE FFFUUUCCCKKKIIINNNGGG SSSOOOBBBEEERRR  */}
        <Carousel autoplay style={carouselStyle}>
          <FoodAndDrinkDetail
            key={items[0].id}
            imageLocation="/victuals/poke.png"
            title={items[0].title}
            name={items[0].name}
            description={items[0].description}
            price={items[0].price}
            time={items[0].time}
            rate={items[0].rate}
          />
          {/* <FoodAndDrinkDetail
            key={items[0].id}
            imageLocation="/victuals/poke.png"
            title={items[0].title}
            name={items[0].name}
            description={items[0].description}
            price={items[0].price}
            time={items[0].time}
            rate={items[0].rate}
          /> */}
        </Carousel>

        {/* 
          <FoodAndDrinkDetail
            imageLocation="/victuals/poke.png"
            title="Try out new"
            name="Cheezy Bluster - 2"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis possimus minima repellendus unde aliquam iste vel, nam cumque soluta aut blanditiis quis, veniam amet ipsa excepturi cum laborum veritatis."
            price="321"
            time="28 min"
          />
          <FoodAndDrinkDetail
            imageLocation="/victuals/poke.png"
            title="Try out new"
            name="Cheezy Bluster - 3"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis possimus minima repellendus unde aliquam iste vel, nam cumque soluta aut blanditiis quis, veniam amet ipsa excepturi cum laborum veritatis."
            price="321"
            time="28 min"
          />
          <FoodAndDrinkDetail
            imageLocation="/victuals/poke.png"
            title="Try out new"
            name="Cheezy Bluster - 4"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis possimus minima repellendus unde aliquam iste vel, nam cumque soluta aut blanditiis quis, veniam amet ipsa excepturi cum laborum veritatis."
            price="321"
            time="28 min"
          />
          <FoodAndDrinkDetail
            imageLocation="/victuals/poke.png"
            title="Try out new"
            name="Cheezy Bluster - 5"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis possimus minima repellendus unde aliquam iste vel, nam cumque soluta aut blanditiis quis, veniam amet ipsa excepturi cum laborum veritatis."
            price="321"
            time="28 min"
          />
          <FoodAndDrinkDetail
            imageLocation="/victuals/poke.png"
            title="Try out new"
            name="Cheezy Bluster - 6"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis possimus minima repellendus unde aliquam iste vel, nam cumque soluta aut blanditiis quis, veniam amet ipsa excepturi cum laborum veritatis."
            price="321"
            time="28 min"
          />
          <FoodAndDrinkDetail
            imageLocation="/victuals/poke.png"
            title="Try out new"
            name="Cheezy Bluster - 7"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis possimus minima repellendus unde aliquam iste vel, nam cumque soluta aut blanditiis quis, veniam amet ipsa excepturi cum laborum veritatis."
            price="321"
            time="28 min"
          />
          <FoodAndDrinkDetail
            imageLocation="/victuals/poke.png"
            title="Try out new"
            name="Cheezy Bluster - 8"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nobis possimus minima repellendus unde aliquam iste vel, nam cumque soluta aut blanditiis quis, veniam amet ipsa excepturi cum laborum veritatis."
            price="321"
            time="28 min"
          />
        </Carousel> */}
      </Col>
      <FoodAndDrinkList items={items.slice(0, 12)} />
    </Row>
  );
};

FoodDrink.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default FoodDrink;
