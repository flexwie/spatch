{ pkgs ? import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/53123c945fd86f6b56af8be011558410bd4444b2.tar.gz") {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.ffmpeg
    pkgs.ttyd
    pkgs.vhs
  ];
}
