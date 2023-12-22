class nestedFramesCommands{
    getMainFrame()
    {
        return cy.get("html > frameset > frame")
    }
    getFirstFrameUnderMainFrame(){
        return cy.enter('frameset frame:nth-child(1)')
    }

    getLeftFrameElement(){
        return 'frame[name="frame-left"]'
    }

    getMiddleFrameElement(){
        return 'frame[name="frame-middle"]'
    }

    getRightFrameElement(){
        return  'frame[name="frame-right"]'
    }

    getBottomFrame(){
        return  cy.enter('frame[name="frame-bottom"]')
    }

   

}

export default nestedFramesCommands;