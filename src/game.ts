import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";
import { Enjine, Mario } from "./runtime/game-runtime";

new Enjine.Application().Initialize(new Mario.LoadingState(), 320, 240);
