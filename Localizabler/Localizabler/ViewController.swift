//
//  ViewController.swift
//  Localizabler
//
//  Created by Cristian Baluta on 01/10/15.
//  Copyright © 2015 Cristian Baluta. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {

    @IBOutlet var pathControl: NSPathControl?
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override var representedObject: AnyObject? {
        didSet {
        // Update the view, if already loaded.
        }
    }


    @IBAction func chosePathClicked(sender: NSButton) {
        let panel = NSOpenPanel()
        panel.canChooseFiles = false
        panel.canChooseDirectories = true
        panel.allowsMultipleSelection = false;
        panel.beginWithCompletionHandler { (result) -> Void in
            print(result)
            if result == NSFileHandlingPanelOKButton {
                print(panel.URLs.first)
                self.pathControl?.URL = panel.URLs.first
                self.readDirectoryForLocalizationfiles()
            }
        }
    }
    
    func readDirectoryForLocalizationfiles() {
        
        let fileManager = NSFileManager.defaultManager()
        let files = try fileManager.contentsOfDirectoryAtURL(self.pathControl!.URL!, includingPropertiesForKeys: nil, options: NSDirectoryEnumerationOptions)
        for file in files {
            
        }
        
        
        let enumerator = fileManager.enumeratorAtPath((self.pathControl?.URL?.absoluteString)!)
        print(enumerator)
        while let element = enumerator?.nextObject() as? String {
            if element.hasSuffix("lproj") {
                print(element)
            }
        }
    }
}
