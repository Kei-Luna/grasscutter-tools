#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri_plugin_store::PluginBuilder;
mod cmd;
use crate::cmd::{
    download, get_mod_list, http, install_ca, proxy_end, proxy_start, read_local_img, rename,
    run_jar, run_program, set_proxy_addr, write_file,
};

fn main() {
    tauri::Builder::default()
        .plugin(PluginBuilder::default().build())
        .invoke_handler(tauri::generate_handler![
            get_mod_list,
            http,
            read_local_img,
            rename,
            write_file,
            download,
            install_ca,
            set_proxy_addr,
            proxy_start,
            proxy_end,
            run_program,
            run_jar
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
