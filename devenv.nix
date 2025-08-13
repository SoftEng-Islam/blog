{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  # languages.javascript.bun.install.enable = false;
  languages.typescript.enable = true;
  languages.javascript.enable = true;
  languages.javascript.corepack.enable = true;
  languages.javascript.pnpm.enable = true;

  enterShell = ''
    
    exec zsh
    git --version
  '';

  # https://devenv.sh/tasks/
  # tasks = {
  #   "myproj:setup".exec = "mytool build";
  #   "devenv:enterShell".after = [ "myproj:setup" ];
  # };

  # https://devenv.sh/tests/
  enterTest = ''
    
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';
}
