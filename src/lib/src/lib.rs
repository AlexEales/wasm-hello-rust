#[macro_use]
extern crate stdweb;

#[js_export]
fn hello(name: String) -> String {
    format!("Hello {}! 👋", name)
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
