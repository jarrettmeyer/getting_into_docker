Vagrant.configure(2) do |config|
    config.vm.box = "ubuntu/trusty64"
    config.vm.provision :shell, path: "./vagrant/provision.sh"
    config.vm.network :forwarded_port, host: 5984, guest: 5984
    config.vm.network :forwarded_port, host: 8080, guest: 8080
    config.vm.synced_folder ".", "/var/getting_into_docker"
end
