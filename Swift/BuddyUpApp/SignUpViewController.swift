//
//  ViewController.swift
//  BuddyUpApp
//
//  Created by Gabrielle Chandrasaputra on 13/2/18.
//  Copyright © 2018 Arizec. All rights reserved.
//

import UIKit
import Firebase

class SignUpViewController: UIViewController {
    @IBOutlet weak var email: UITextField!
    
    @IBOutlet weak var password: UITextField!
    
    
    @IBAction func createAccount(_ sender: Any) {
        if let email = email.text, let password = password.text{
            Auth.auth().createUser(withEmail: email, password: password, completion: { (user, error) in
                if error != nil{//login error
                    let alert = UIAlertController(title: "Error", message: "Cannot create an account", preferredStyle: UIAlertControllerStyle.alert)
                    alert.addAction(UIAlertAction(title: "OK", style: UIAlertActionStyle.default, handler: nil))
                    self.present(alert, animated: true, completion: nil)
                    
                }else{//successful ogin
                    
                    print("Success")
                    self.performSegue(withIdentifier: "goToInitial", sender: self)
                    
                }
            })
        }
        
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

