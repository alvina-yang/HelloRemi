from api import getStory

def test_getStory():
    print("Testing getStory()...")
    story = getStory("emilyli")
    print(story)

if __name__ == "__main__":
    test_getStory()