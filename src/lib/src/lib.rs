#[macro_use]
extern crate stdweb;

#[js_export]
fn hello(name: String) -> String {
    format!("Hello {}! 👋", name)
}
